import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService:TaskService) { }

  // without Observable
  // ngOnInit(): void {
  //   this.tasks = this.taskService.getTasks();
  // }

  // Using Observable & Without Http Client
  // ngOnInit(): void {
  //  this.taskService.getTasks().subscribe(
  //    tasks => this.tasks=tasks
  //    );
  // }

  // Using Observable & Http Client
  ngOnInit(): void {
   this.taskService.getTasks().subscribe(
     tasks => this.tasks=tasks
     );
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      () => this.tasks = this.tasks.filter(t => t.id !== task.id)
    )
  }
}
