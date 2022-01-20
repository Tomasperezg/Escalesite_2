import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentumprojectComponent } from './momentumproject.component';

describe('MomentumprojectComponent', () => {
  let component: MomentumprojectComponent;
  let fixture: ComponentFixture<MomentumprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentumprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentumprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
