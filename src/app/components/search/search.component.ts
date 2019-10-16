import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; //este es para los params
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() heroes:any[] = [];
  termino:string;
  idx:number;

  allHeroes:any[] = [];

  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private router:Router ) {  }

  ngOnInit() {
 
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }
  /* 
  verHeroeNombre( nombre:string ){
    this.allHeroes = this._heroesService.getHeroes();
    
    for(let i=0;i<this.allHeroes.length;i++){
      if(this.allHeroes[i].nombre == nombre){
        this.idx = i;
      }
    }
    this.router.navigate(['/heroe',this.idx]);
  }
*/

}
