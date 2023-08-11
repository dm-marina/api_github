import { Injectable, Output } from "@angular/core";
import { User } from "../user-list/user.model";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class SearchedService{
    searchedChanged = new Subject<User[]>();
    @Output()login:string;
    public searchedUsers:User[]=[]

    setUsers(searchedUsers:User[]){
        this.searchedUsers = searchedUsers;
        this.searchedChanged.next(this.searchedUsers);
    }

    getUsers(){
        return this.searchedUsers

    }
    getUser(login:string){
        for(let searchedUser of this.searchedUsers){
            login = searchedUser.login;
            console.log(login)

        }
        return login
       
    }
}