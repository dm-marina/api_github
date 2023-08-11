import { Injectable, Output } from "@angular/core";
import { User } from "./user.model";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class UserService{
    usersChanged = new Subject<User[]>();
    login:string;
    public users:User[]=[];

    setUsers(users:User[]){
        this.users = users;
        this.usersChanged.next(this.users.slice());
    }

    getUsers(){
        return this.users.slice()

    }
    setUserLogin(login){
        this.login = login;
    }
    getUser(login:string){
        // for(let user of this.users){
        //     login = user.login;
        //     this.login = login
        //     // console.log(login)

        // }
        // console.log(this.login)
        // return this.login
       
    }
}