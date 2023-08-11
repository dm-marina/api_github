import { Component, OnInit } from '@angular/core';
import { User } from '../user-list/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../user-list/user.service';
import { DataStorage } from '../shared/data-storage.service';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.css']
})
export class InformComponent implements OnInit{
 users:User[];
 userSubscr:Subscription;

 ngOnInit(): void {
 }

}
