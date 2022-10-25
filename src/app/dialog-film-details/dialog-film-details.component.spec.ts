import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFilmDetailsComponent } from './dialog-film-details.component';

describe('DialogFilmDetailsComponent', () => {
  let component: DialogFilmDetailsComponent;
  let fixture: ComponentFixture<DialogFilmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFilmDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFilmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
