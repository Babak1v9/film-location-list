import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IFilm } from '../shared/models/film';

@Component({
  selector: 'app-dialog-film-details',
  templateUrl: './dialog-film-details.component.html',
  styleUrls: ['./dialog-film-details.component.scss']
})
export class DialogFilmDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public film: IFilm) { }

  ngOnInit(): void {
    
  }

}
