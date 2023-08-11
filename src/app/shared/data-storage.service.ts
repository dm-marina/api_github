import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../user-list/user.model";
import {tap} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators' 
import { UserService } from "../user-list/user.service";
import { Repos } from "../reposes/repos.model";
import { ReposService } from "../reposes/repos.service";

@Injectable({providedIn:'root'})
export class DataStorage{
  searchedUser:string;
    constructor(private http:HttpClient, private userService:UserService, private reposService:ReposService){}
  login:string
    getUsers(){
        return this.http.get<User[]>
         ('https://api.github.com/users')
         .pipe(
           map(users=>{
             return users.map(user=>{
               return{...user};
             });
           }),
           tap(users=>{
             this.userService.setUsers(users)
           })
         )
    }
    
    getUserByLogin(login:string){
      return this.http.get<User[]>
         (`https://api.github.com/users/${login}`)
         .pipe(
           map((user)=>{
            return user
           })
         )
    }

  getReposes(login:string){
    return this.http.get<Repos[]>
    (`https://api.github.com/users/${login}/repos`)
    .pipe(
      map(reposes=>{
        return reposes.map(repos=>{
          console.log(repos)
          return{...repos}
        });
      }),
      tap(reposes=>{
        this.reposService.setReposes(reposes)
      })
    )
  }

  searchUsers(username:string){
   return  this.http.get<User[]|any>(`https://api.github.com/search/users?q=${username}`)
   .pipe(
      map(users=>users.items),
      debounceTime(1000),
      distinctUntilChanged())
 
  }
}
