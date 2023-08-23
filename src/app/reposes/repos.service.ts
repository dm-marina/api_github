import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Repos } from "./repos.model";
import { User } from '../user-list/user.model';

@Injectable({providedIn:'root'})
export class ReposService{
    users:User[]
    id:number
    reposesChanged = new Subject<Repos[]>();
    public reposes:Repos[]=[]
    public repos:Repos[]=[] 
    setReposes(reposes:Repos[]){
        this.reposes = reposes;
        this.reposesChanged.next(this.reposes);
    }
    getReposes(){
        return this.reposes.slice()
    }
        
}