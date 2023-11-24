import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports:[LoginComponent,RouterModule]
})
export class AppComponent {
  title = 'd1';
}
