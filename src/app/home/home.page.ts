import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getStudents();
  }

  getStudents() {
    this.students = this.studentService.get();
  }

  navToStudent() {
    this.navCtrl.navigateForward('/add-student');
  }


}
