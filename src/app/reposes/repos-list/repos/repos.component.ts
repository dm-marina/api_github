import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Repos } from '../../repos.model';
import { ReposService } from '../../repos.service';
import { ReposItemComponent } from './repos-item/repos-item.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit{
  @Input()repos:Repos;
  @Input() index:number;
  reposItem:ReposItemComponent;
  private closeSub!:Subscription;
  sub:Subscription
  @ViewChild(PlaceholderDirective, {static:false}) alertHost!:PlaceholderDirective;
  constructor(private reposService:ReposService){}
  ngOnInit(): void {
    for(let repos of this.reposService.reposes){
      this.repos = repos
      console.log(this.repos)
    }
  }

  openMoreInform(reposItem:ReposItemComponent){
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const compRef = hostViewContainerRef.createComponent(ReposItemComponent);
    compRef.instance.reposItem = reposItem;
    this.closeSub=compRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }
  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
    this.sub.unsubscribe();
  }
}
