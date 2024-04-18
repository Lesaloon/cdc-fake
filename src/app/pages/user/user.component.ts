import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RoleEnum } from 'src/app/enums/role-enum';
import { User } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[] = [];
  form = this.formBuilder.group<User>({
    id: 0,
    username: '',
    password: '',
    role: RoleEnum.user
  });

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.apiService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  onSubmit(): void {
    const user = this.form.value;

    this.apiService.createUser(user as User).subscribe((user: User) => {
      this.users.push(user);
    });
  }
}
