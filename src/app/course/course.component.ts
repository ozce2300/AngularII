import { Component } from '@angular/core';
import { Course } from '../modules/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  //Properties

  courses: Course[] = [];

  constructor(private courseService : CourseService) {}

  ngOnInit() {
    this.courseService.getData().subscribe((courses) =>{
      this.courses = courses;
    }


    );
  }

}
