import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorage } from '../shared/data-storage.service';
import { ReposService } from './repos.service';
import { Repos } from './repos.model';

@Component({
  selector: 'app-reposes',
  templateUrl: './reposes.component.html',
  styleUrls: ['./reposes.component.css']
})
export class ReposesComponent implements OnInit{
  @Output()repos:Repos[]|any=[]
  reposSub:Subscription;
  login:string
  constructor(private dataStorage:DataStorage, private reposService:ReposService){}
 ngOnInit(): void {
  this.reposSub = this.dataStorage.getReposes(this.login)
  .subscribe(
      (reposes:Repos[]|any[])=>{
        for(let reposEl of reposes){
        this.repos =   this.reposService.reposes.push(reposEl)
          console.log(this.repos)
        }
        console.log(this.repos)
        return this.repos
      }
  )
  this.reposService.setReposes(this.repos)
 }
}
