import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Repos } from 'src/app/reposes/repos.model';
import { ReposService } from '../../../repos.service';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repos-item',
  templateUrl: './repos-item.component.html',
  styleUrls: ['./repos-item.component.css']
})
export class ReposItemComponent implements OnInit{
  repos:Repos;
  reposItem:ReposItemComponent;
  reposItemSub:Subscription;
  @ViewChild(PlaceholderDirective, {static:false}) alertHost!: PlaceholderDirective;
  @Output() close = new EventEmitter<void>();
  constructor(private reposService:ReposService){}
    ngOnInit(): void {
      for(let reposEl of this.reposService.repos){
        this.repos = reposEl
      }
      console.log(this.repos.name)
    }
    onClose(){
      this.close.emit();
    }

}
