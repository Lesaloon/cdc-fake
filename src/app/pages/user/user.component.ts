import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[] = [];


  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
