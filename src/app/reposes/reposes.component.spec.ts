import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposesComponent } from './reposes.component';

describe('ReposesComponent', () => {
  let component: ReposesComponent;
  let fixture: ComponentFixture<ReposesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReposesComponent]
    });
    fixture = TestBed.createComponent(ReposesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
