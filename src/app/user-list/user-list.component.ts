import { Component, OnInit} from '@angular/core';
import { User } from './user.model';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';
import { DataStorage } from '../shared/data-storage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users:User[] | any[];
  userSubscr:Subscription;
  constructor(private userService:UserService, private dataStorage:DataStorage){}

  ngOnInit(): void {
    this.dataStorage.getUsers().subscribe()
    this.userSubscr = this.userService.usersChanged
   .subscribe(
    (users:User[])=>{
      this.users= users;
    }
   )
   this.users = this.userService.getUsers()
  }

  
  



}
