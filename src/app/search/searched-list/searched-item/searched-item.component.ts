import { Component, Input, OnInit } from '@angular/core';
import { Repos } from 'src/app/reposes/repos.model';
import { User } from 'src/app/user-list/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user-list/user.service';
import { DataStorage } from 'src/app/shared/data-storage.service';
import { SearchedService } from '../../searched.service';

@Component({
  selector: 'app-searched-item',
  templateUrl: './searched-item.component.html',
  styleUrls: ['./searched-item.component.css']
})
export class SearchedItemComponent implements OnInit{
  @Input()searchedUser:User;
  @Input()login: string;
  @Input() id:number
  reposes:Repos[] | any
  constructor(private router:Router, private route:ActivatedRoute, private searchedService:SearchedService,
              private dataStorage:DataStorage){}

  
  showRepos(){
  }
  ngOnInit(): void {
    for(let user of this.searchedService.searchedUsers){
      this.searchedUser = user;
    }
}
}
