import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PokemonService} from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'PokemonAngular';

  searchForm: FormGroup;

  constructor(private form: FormBuilder, private pokemonService: PokemonService, private router: Router) {
    this.searchPokemon();
  }

  ngOnInit() {
  }

  searchPokemon() {
    this.searchForm = this.form.group({
     Name: new FormControl 
    });
  }
  
  onSubmit() {
    this.pokemonService.getPokemon(this.searchForm.value.Name).subscribe(() => {
      this.router.navigate([`/detail/${this.searchForm.value.Name}`])
    })
  }
}
