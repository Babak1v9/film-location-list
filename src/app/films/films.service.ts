import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IFilm } from '../shared/models/film';

@Injectable()
export class FilmsService {
    constructor(private http: HttpClient) {}
   
    filmUrl = "https://data.sfgov.org/resource/yitu-d5am.json";

    getFilms() {
        return this.http.get<IFilm[]>(this.filmUrl, {observe: 'response'})
            .pipe(
                map(response => {
                    console.log("films.service: ",response);
                    return response.body;
                })
            );
    }
}