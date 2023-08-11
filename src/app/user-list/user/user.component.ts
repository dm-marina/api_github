import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';
import { Repos } from 'src/app/reposes/repos.model';
import { DataStorage } from '../../shared/data-storage.service';
import { Subscription, map } from 'rxjs';
import { ReposService } from 'src/app/reposes/repos.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  @Input()user:User;
  userElem:User[];
  @Input()login;
  @Input() id:number
  userSub:Subscription;
  reposSub:Subscription;
  repos:Repos[] | any
  clicked=false;
  constructor(private router:Router, private route:ActivatedRoute, private userService:UserService,
              private dataStorage:DataStorage, private reposService:ReposService){}

  showRepos(){
    this.clicked = !this.clicked
     this.loadUser(this.user.login)
     this.login = this.user.login
     console.log(this.login)
     this.dataStorage.getReposes(this.login)
     this.reposService.getReposes()
    // this.router.navigate([`repos/:${this.login}`], {relativeTo: this.route})
  }
  loadUser(login:string){
    this.userSub = this.dataStorage.getUserByLogin(login).subscribe(
      (user:User[])=>{
        console.log(user)
        this.userElem=user;
        console.log(this.userElem)
      }
    )
  }

  ngOnInit(): void {
    // this.route.params.subscribe(
    //   params=>{
    //     this.reposService.login = params['login']
    //     // this.userService.getUser(this.reposService.login)
    //     this.dataStorage.getUserByLogin(this.reposService.login)
    //   }
    // )
  }

}
