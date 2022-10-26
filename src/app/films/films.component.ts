import { Component, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { IFilm } from '../shared/models/film';
import { FilmsService } from './films.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogFilmDetailsComponent } from '../dialog-film-details/dialog-film-details.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements AfterViewInit {

  films: IFilm[] = [];
  displayedColumns: string[] = ['title', 'release_year', 'production_company', 'actions'];
  dataSource = new MatTableDataSource<IFilm>();
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private filmsService: FilmsService, public dialog: MatDialog) { }
  
  ngAfterViewInit(): void {
    this.getFilms();
  }

  openDialog(film : IFilm) {
    this.dialog.open(DialogFilmDetailsComponent, {
      data: film
    });
  }
  
  getFilms(){
    this.filmsService.getFilms()
    .subscribe(response =>{
      if (response != null){
        this.films = response;
        this.dataSource = new MatTableDataSource<IFilm>(this.films);

        this.dataSource.filterPredicate = function(data, filter: string): boolean {
          return data.title.toLowerCase().includes(filter) || data.release_year.toString() === (filter) || data.production_company.toString().includes(filter);
        };
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }, error => {
      console.log(error);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

