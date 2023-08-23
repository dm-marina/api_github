import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorage } from '../shared/data-storage.service';
import { ReposService } from './repos.service';
import { Repos } from './repos.model';
import { UserService } from '../user-list/user.service';

@Component({
  selector: 'app-reposes',
  templateUrl: './reposes.component.html',
  styleUrls: ['./reposes.component.css']
})
export class ReposesComponent implements OnInit{
  @Input()reposes:Repos[]|any=[]
  reposSub:Subscription;
  login:string
  constructor(private dataStorage:DataStorage, private reposService:ReposService, private userService:UserService){}
 ngOnInit(): void {
  this.login = this.userService.login
  this.reposSub = this.dataStorage.getReposes(this.login)
  .subscribe(
      (reposes:Repos[])=>{
        for(let reposEl of reposes){
         this.reposes.push(reposEl)
        }
        console.log(this.reposes)
        return this.reposes
      }
  )
  this.reposService.setReposes(this.reposes)
 }
}
