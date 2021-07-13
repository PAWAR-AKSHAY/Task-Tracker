import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // Without Observable
  // getTasks() : Task[] {
  //   return TASKS;
  // }

  // Using Observable
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
