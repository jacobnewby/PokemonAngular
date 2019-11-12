import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/components/pokemon/pokemon';
import {  MatTableDataSource } from '@angular/material';
import {ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  Pokemon;
  columnName = ['name', 'sprites', 'type', 'move1', 'move2', 'move3', 'move4'];
  dataSource: MatTableDataSource<Pokemon>;
  constructor(private pokemonService: PokemonService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routerData => {
      this.pokemonService.getPokemon(routerData.get('name')).subscribe((pokemon: Pokemon[])=>{
      this.dataSource = new MatTableDataSource<Pokemon>(pokemon);
      console.log(pokemon);
      this.Pokemon=pokemon;
    });
    
    });
  }



//     {
//       this.pokemonService.getPokemon('name').subscribe((pokemon: Pokemon[])=>{
//         this.dataSource = new MatTableDataSource<Pokemon>(pokemon);
//         console.log(pokemon);
//         this.Pokemon=pokemon;
//       });
// }
}

  

