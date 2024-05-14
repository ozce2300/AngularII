import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../modules/course';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  //Properti
  url: string = "https://webbutveckling.miun.se/files/ramschema_ht23.json"

  constructor(private http: HttpClient) { }

  //method
  getData(): Observable<Course[]> {

    return this.http.get<Course[]>(this.url)

  }
}
