import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/components/pokemon/pokemon';
import { MatTableDataSource } from '@angular/material';
import {ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class PokemonIndexComponent implements OnInit {
  Pokemon;
  columnName = ['name', 'sprites', 'type', 'move1', 'move2', 'move3', 'move4'];
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
