import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service Demo Example';


  message = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.message = this.userService.getMessage();
  }
}
