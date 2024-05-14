import { Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';

export const routes: Routes = [
    { path: "course", component: CourseComponent, title: "Kurser"},
    { path: "**", redirectTo: "course"}
];
