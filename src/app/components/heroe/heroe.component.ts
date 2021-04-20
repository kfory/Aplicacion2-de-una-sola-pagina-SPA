import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  heroe:any = {};

  constructor( 
    private activated:ActivatedRoute ,
    private heroesServicio:HeroesService
    ) { 

    this.activated.params.subscribe(parametro => {
    
      //console.log(parametro['id']) 
      this.heroe = this.heroesServicio.getHeroe(parametro['id'])
      
      console.log( this.heroe)
   
    });

  }



}
