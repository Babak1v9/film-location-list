import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { FilmsComponent } from './films.component';
import { FilmsService } from './films.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsComponent ],
      imports: [ HttpClientTestingModule, MatDialogModule ],
      providers: [FilmsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check displayed columns', () => {
    expect(component.displayedColumns).toEqual(['title', 'release_year', 'production_company', 'actions']);
  })
});
