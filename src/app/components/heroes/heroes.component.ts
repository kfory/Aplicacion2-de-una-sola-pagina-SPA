import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from './../../servicios/heroes.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(
    private HeroesServicio: HeroesService,
    private router:Router) { 

    console.log('constructor');

  }

  ngOnInit(): void {
    console.log('ngOniInit');

    this.heroes = this.HeroesServicio.getHeroes();

    console.log(this.heroes)

  }

  //para el boton
  verHeroe( index: number ){

    console.log( "This is Metodo pasandole index ->" + index)
    this.router.navigate( ['heroe/', index] )

  }

}
