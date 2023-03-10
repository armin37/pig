import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigsListComponent } from './pigs-list.component';

describe('PigsListComponent', () => {
  let component: PigsListComponent;
  let fixture: ComponentFixture<PigsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PigsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PigsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
