import { Component } from '@angular/core';
import { Course } from '../modules/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  //Properties

  courses: Course[] = [];
  filteredCourses: Course[] = [];
  filteredValue: string = "";

  constructor(private courseService : CourseService) {}

//Method  
  ngOnInit() {
    this.courseService.getData().subscribe((courses) =>{
      this.courses = courses;
      this.filteredCourses = courses;
    });
  }

  applyfilter(): void {
    this.filteredCourses = this.courses.filter((course) =>
      course.code.toLowerCase().includes(this.filteredValue.toLowerCase()) ||
      course.coursename.toLowerCase().includes(this.filteredValue.toLowerCase()) ||
      course.progression.toLowerCase().includes(this.filteredValue.toLowerCase())
)
  }

}
