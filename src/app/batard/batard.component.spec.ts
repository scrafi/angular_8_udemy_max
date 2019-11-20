import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatardComponent } from './batard.component';

describe('BatardComponent', () => {
  let component: BatardComponent;
  let fixture: ComponentFixture<BatardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
