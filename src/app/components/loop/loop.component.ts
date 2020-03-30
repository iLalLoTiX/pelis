import { Component, OnInit, Input } from '@angular/core';

import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styles: [`
  .brick { width: 200px;
            height: 200px;;
             }
`]
})
export class LoopComponent implements OnInit {

  @Input('peliculas') peliculas;

  constructor() { }

  urlImg: string = 'http://image.tmdb.org/t/p/w300';

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
