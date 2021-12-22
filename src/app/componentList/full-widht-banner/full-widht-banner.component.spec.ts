import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidhtBannerComponent } from './full-widht-banner.component';

describe('FullWidhtBannerComponent', () => {
  let component: FullWidhtBannerComponent;
  let fixture: ComponentFixture<FullWidhtBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullWidhtBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidhtBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
