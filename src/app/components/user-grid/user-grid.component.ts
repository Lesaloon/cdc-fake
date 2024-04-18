import { Component } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';
import { User } from '../../interfaces/user';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent {
  users: User[] = [];
  constructor(private httpClientService: HttpClientService, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
