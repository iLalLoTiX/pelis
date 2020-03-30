import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  
})
export class HomeComponent implements OnInit {

  public peliculasPop: any[] = [];
  public peliculas2010: any[] = [];

  constructor(public _ps: PeliculasService)
  {
    
    this._ps.getPopulares().subscribe((peliculas: any[]) => 
      {
      
        for(const pelicula of peliculas) 
        {
          if (this.peliculasPop.length < 6) 
          {
            this.peliculasPop.push(pelicula);
          } else
          {
            return this.peliculasPop;
          }

        }
        
      return this.peliculasPop;});

    this._ps.get2010().subscribe((peliculas: any[]) =>
    {
      for(const pelicula of peliculas['results'])
      {
        if(this.peliculas2010.length <6)
        {
          this.peliculas2010.push(pelicula);
        }
        else
        {
          return this.peliculas2010;
        }
      }

      return this.peliculas2010;
    });
  }

  

  ngOnInit()
  {
    
  }

}
