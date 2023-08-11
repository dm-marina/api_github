import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorage } from 'src/app/shared/data-storage.service';
import { User } from 'src/app/user-list/user.model';
import { SearchedService } from 'src/app/search/searched.service';

@Component({
  selector: 'app-searched-list',
  templateUrl: './searched-list.component.html',
  styleUrls: ['./searched-list.component.css']
})
export class SearchedListComponent {
  searchedUsers:User[];
  searchedSubscr:Subscription;
  constructor(private searchedService:SearchedService, private dataStorage:DataStorage){}

  ngOnInit(): void {
    this.dataStorage.getUsers().subscribe()
    this.searchedSubscr = this.searchedService.searchedChanged
   .subscribe(
    (users:User[])=>{
      this.searchedUsers = users;
    }
   )
   this.searchedUsers = this.searchedService.getUsers()
  }
  
}
