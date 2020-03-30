import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styles: []
})
export class InfoComponent implements OnInit {

  constructor(private id: ActivatedRoute,
              private _ps: PeliculasService) { 
    const A = this.id.snapshot.paramMap.get('id');
    this._ps.getInfo(A).subscribe();
  }

  ngOnInit() {
  }

}
