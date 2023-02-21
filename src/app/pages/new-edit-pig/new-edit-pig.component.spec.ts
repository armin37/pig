import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditPigComponent } from './new-edit-pig.component';

describe('NewEditPigComponent', () => {
  let component: NewEditPigComponent;
  let fixture: ComponentFixture<NewEditPigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEditPigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEditPigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
