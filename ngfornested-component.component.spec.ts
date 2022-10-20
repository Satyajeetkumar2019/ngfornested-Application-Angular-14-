import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfornestedComponentComponent } from './ngfornested-component.component';

describe('NgfornestedComponentComponent', () => {
  let component: NgfornestedComponentComponent;
  let fixture: ComponentFixture<NgfornestedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgfornestedComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgfornestedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
