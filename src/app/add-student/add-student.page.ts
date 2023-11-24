import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {
  title = 'New Student';
  btnTitle = 'Add student';

  studentForm = this.fb.group({
    studentName: ['', [Validators.required]],
    studentLevel: ['', [Validators.required]],
    studentAge: [0, [Validators.required, Validators.min(10)]],
  });

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private navCtrl: NavController,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if(!id) {
      return;
    }

    const localStudent = this.studentService.getOne(+id);
    this.studentForm.patchValue({...localStudent});

  }

  addStudent() {
    if(this.studentForm.valid) {
      const newStudent: Student = {
        id: 10,
        studentName: this.studentForm.get('studentName')?.value || '',
        studentAge: this.studentForm.get('studentAge')?.value || 1,
        studentLevel: this.studentForm.get('studentLevel')?.value || ''
      }

      this.studentService.addStudent(newStudent);
      this.navCtrl.navigateRoot('/home');
    }
  }

}
