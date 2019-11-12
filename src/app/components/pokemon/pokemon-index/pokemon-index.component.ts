import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/components/pokemon/pokemon';
import {  MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-pokemon-index',
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.css']
})
export class PokemonIndexComponent implements OnInit {
  Pokemon;
  columnName = ['name', 'sprites', 'types', 'move1', 'move2', 'move3', 'move4'];
  dataSource: MatTableDataSource<Pokemon>;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getAll().subscribe((pokemon: Pokemon[])=>{
      this.dataSource = new MatTableDataSource<Pokemon>(pokemon);
      console.log(pokemon);
      this.Pokemon=pokemon;
    });
  }

}
