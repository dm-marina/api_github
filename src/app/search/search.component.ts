import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DataStorage } from '../shared/data-storage.service';
import { User } from '../user-list/user.model';
import {Observable, Subscription} from 'rxjs'

import { SearchedService } from './searched.service';
import { UserService } from '../user-list/user.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
 @Input() searchedUser:User[];
 @Input()searchedUsers:User[]|any[]=[];
  isError =false;
  error:string;
  searchStr:string='';
  changeSub:Subscription;
  minLength:number= 3;
  constructor(private dataStorage:DataStorage, private searchedService:SearchedService){}
  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
  }
  handleChange(){
   if(this.searchStr.length>=this.minLength){
    this.changeSub = this.dataStorage.searchUsers(this.searchStr)
    .subscribe(
        (users:User[]|any[])=>{
          for(let userEl of users){
            this.searchedUsers.push(userEl)
            console.log(this.searchedUsers)
          }
          return this.searchedUsers
        }
    )
    this.searchedService.setUsers(this.searchedUsers)
   }
  if(this.searchStr.length<this.minLength){
    this.isError=!this.isError
    this.error= '! You should enter 3 or more characters !'
  }
  }
 

  ngOnInit(): void {
   
  }

}
