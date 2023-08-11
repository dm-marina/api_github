import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Repos } from 'src/app/reposes/repos.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ReposService } from '../../../repos.service';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-repos-item',
  templateUrl: './repos-item.component.html',
  styleUrls: ['./repos-item.component.css']
})
export class ReposItemComponent implements OnInit{
  repos:Repos;
  id:number;
  reposItem:ReposItemComponent;
  @ViewChild(PlaceholderDirective, {static:false}) alertHost!: PlaceholderDirective;
  @Output() close = new EventEmitter<void>();
  constructor(private route:ActivatedRoute, private reposService:ReposService){}
    ngOnInit(): void {
      this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.repos = this.reposService.getRepos(this.id);
        }
      );
    }
    onClose(){
      this.close.emit();
    }

}
