import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposItemComponent } from './repos-item.component';

describe('ReposItemComponent', () => {
  let component: ReposItemComponent;
  let fixture: ComponentFixture<ReposItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReposItemComponent]
    });
    fixture = TestBed.createComponent(ReposItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
