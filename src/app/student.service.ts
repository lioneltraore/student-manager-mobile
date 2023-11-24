import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    {
      id: 1,
      studentName: 'Ali Ouedraogo',
      studentLevel: 'IC1',
      studentAge: 20
    },
    {
      id: 2,
      studentName: 'Patrick Tall',
      studentLevel: 'IC3',
      studentAge: 24
    },
    {
      id: 3,
      studentName: 'Jhon Sere',
      studentLevel: 'IC2',
      studentAge: 22
    }
  ]

  constructor() { }

  get(): Student[] {
    return this.students;
  }

  addStudent(student: Student) {
    this.students.unshift(student);
  }

  getOne(id: number) {
    return this.students.find(st => st.id === id);
  }


}
