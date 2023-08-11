import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Repos } from "./repos.model";
import { User } from '../user-list/user.model';

@Injectable({providedIn:'root'})
export class ReposService{
    login:string;
    users:User[]
    reposesChanged = new Subject<Repos[]>();
    public reposes:Repos[]=[]

    setReposes(reposes:Repos[]){
        this.reposes = reposes;
        this.reposesChanged.next(this.reposes);
    }

    getReposes(){
        return this.reposes
    }
    getRepos(index:number){
        return this.reposes[index];
    }
}