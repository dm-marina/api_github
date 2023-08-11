import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { Repos } from '../repos.model';
import { User } from 'src/app/user-list/user.model';
import { DataStorage } from 'src/app/shared/data-storage.service';
import { ReposService } from '../repos.service';
@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit{
  reposes:Repos[];
  user:User
  @Output() login:string;
  @Input()index:number;
  reposSub:Subscription;
  constructor(private dataStorage:DataStorage, private reposService:ReposService, 
      private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        this.login = params['login']
        this.dataStorage.getUserByLogin(this.reposService.login)
      }
    )
    this.dataStorage.getReposes(this.login).subscribe()
    this.reposSub= this.reposService.reposesChanged
   .subscribe(
    (reposes:Repos[])=>{
      this.reposes = reposes
    }
   )
   this.reposes = this.reposService.getReposes()
  }
  

}
