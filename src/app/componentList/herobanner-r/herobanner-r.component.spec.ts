import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerobannerRComponent } from './herobanner-r.component';

describe('HerobannerRComponent', () => {
  let component: HerobannerRComponent;
  let fixture: ComponentFixture<HerobannerRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerobannerRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerobannerRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
