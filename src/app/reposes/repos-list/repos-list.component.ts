import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Repos } from '../repos.model';
import { DataStorage } from 'src/app/shared/data-storage.service';
import { ReposService } from '../repos.service';
@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit, OnDestroy{
  reposes:Repos[];
  @Output() login:string;
  reposSub:Subscription;
  dataStorageSub:Subscription;
  constructor(private dataStorage:DataStorage, private reposService:ReposService){}

  ngOnInit(): void {
   this.dataStorageSub =  this.dataStorage.getReposes(this.login).subscribe()
    this.reposSub= this.reposService.reposesChanged
   .subscribe(
    (reposes:Repos[])=>{
      this.reposes = reposes
    }
   )
   this.reposes = this.reposService.getReposes()
  }
  ngOnDestroy(): void {
    this.dataStorageSub.unsubscribe()
    this.reposSub.unsubscribe()
  }
  

}
