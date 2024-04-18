import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css'],
  inputs: ['users']
})
export class UserGridComponent {
  users: User[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  duplicateUser(user: User) {
    const newUser = { ...user };
    newUser.id = null;
    this.apiService.createUser( newUser ).subscribe((user: User) => {
      this.users.push(user);
    });
  }

  deleteUser(user: User) {
    if (user.id !== null) {
      this.apiService.deleteUser(user.id).subscribe(() => {
        this.users = this.users.filter(u => u.id !== user.id);
      });
    }
  }

}
