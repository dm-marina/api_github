import { Component, EventEmitter, Input,  Output,  ViewChild } from '@angular/core';
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
export class ReposComponent {
  @Input() repos:Repos;
  reposItemSub:Subscription;
  reposItem:ReposItemComponent;
  private closeSub!:Subscription;
  @ViewChild(PlaceholderDirective, {static:false}) alertHost!:PlaceholderDirective;
  constructor(private reposService:ReposService){}
 
  @Output() close = new EventEmitter<void>();
  openMoreInform(reposItem:ReposItemComponent){
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const compRef = hostViewContainerRef.createComponent(ReposItemComponent);
    compRef.instance.reposItem = reposItem;
    this.closeSub=compRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
    this.reposService.repos.push(this.repos)
  }
  onClose(){
    this.close.emit();
  }
  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }
}
