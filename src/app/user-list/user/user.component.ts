import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';
import { DataStorage } from '../../shared/data-storage.service';
import { Subscription } from 'rxjs';
import { ReposService } from 'src/app/reposes/repos.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  @Input()user:User;
  userElem:User[];
  userSub:Subscription;
  clicked=false;
  searchedUser:User
  constructor(private dataStorage:DataStorage, 
              private reposService:ReposService, 
              private userService:UserService){}

  showRepos(){
    this.clicked = !this.clicked
     this.loadUser(this.user.login)
     this.userService.login = this.user.login
     this.dataStorage.getReposes(this.userService.login)
     this.reposService.getReposes()
  }
  loadUser(login:string){
    this.userSub = this.dataStorage.getUserByLogin(login).subscribe(
      (user:User[])=>{
        this.userElem=user;
      }
    )
  }
  ngOnInit(): void {
    for(let user of this.userService.users){
      this.searchedUser = user
    }
  }


}
