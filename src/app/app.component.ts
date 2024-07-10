import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <nav class="side-menu">
        <ul>
          <li><a routerLink="/client-creation">Client Creation</a></li>
          <li><a routerLink="/client-meeting-schedule">Client Meeting Schedule</a></li>
        </ul>
      </nav>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  imports: [RouterModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-management-app';
}


