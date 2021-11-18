import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlecomponentComponent } from './titlecomponent.component';

describe('TitlecomponentComponent', () => {
  let component: TitlecomponentComponent;
  let fixture: ComponentFixture<TitlecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
