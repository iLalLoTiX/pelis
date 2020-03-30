import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [`
  .brick { width: 200px;
            height: 200px;;
             }
`]
})
export class BuscarComponent implements OnInit {

  constructor(private text: ActivatedRoute,
            public _ps: PeliculasService) { 
  const A = this.text.snapshot.paramMap.get('texto');
  this._ps.buscarPelicula(A).subscribe();
  }

  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.2s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true
  };

  ngOnInit() {
  }

}
