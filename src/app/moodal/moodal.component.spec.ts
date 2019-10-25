import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodalComponent } from './moodal.component';

describe('MoodalComponent', () => {
  let component: MoodalComponent;
  let fixture: ComponentFixture<MoodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
