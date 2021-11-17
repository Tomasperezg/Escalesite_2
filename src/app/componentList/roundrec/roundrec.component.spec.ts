import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundrecComponent } from './roundrec.component';

describe('RoundrecComponent', () => {
  let component: RoundrecComponent;
  let fixture: ComponentFixture<RoundrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
