import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  lastPage: number;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.load();
  }

  public load(page = 1): void {
    this.userService.all(page)
      .subscribe(
        (res: any) => {
          this.users = res.data;
          this.lastPage = res.meta.last_page;
        }
      );
  }

  public delete(userId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.userService.delete(userId)
        .subscribe(
          () => {
            this.users = this.users.filter(u => u.id !== userId);
          }
        )
    }
  }

}