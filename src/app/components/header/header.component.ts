import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task-Tracker';
  showAddTask: boolean = false; // ! means the value for this variable/property is not null or undefined
  subscription!: Subscription;


  // Notes: In order to use a service, we have to add it in the constructor.
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (
      this.showAddTask = value
    ))
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
    this.showAddTask = this.showAddTask;
  }
}
