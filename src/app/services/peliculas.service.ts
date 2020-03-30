import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PeliculasService {

  private apikey: string = "99849165381b5f770dc4f437efe1a867";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  
  public peliculasBuscar: any[] = [];

  constructor( private http:HttpClient) { }

  getPopulares(){

    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url ).pipe(map((
      peliculas: any[]) => {
      return peliculas['results'];
    } ));
  }

  get2010(){

     const url = `${ this.urlMoviedb }/discover/movie?primary_release_year=2010&sort_
     by=vote_average.desc&api_key=${ this.apikey }&language=es`;

     return this.http.get( url ).pipe(map((
       peliculas: any[]) => {

      return peliculas;
    } ));
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.http.get( url ).pipe(map((peliculas: any[]) => {
      for(const pelicula of peliculas['results']){
          this.peliculasBuscar.push(pelicula);
        }
          return this.peliculasBuscar;
    } ));
  }

}
