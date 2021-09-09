import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5001/tasks';

  constructor(private http:HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
