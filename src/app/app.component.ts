import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PokemonService} from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokemonAngular';

  searchForm: FormGroup;

  constructor(private form: FormBuilder, private pokemonService: PokemonService, private router: Router) {
    this.searchPokemon();
  }

  searchPokemon() {
    this.searchForm = this.form.group({
     Name: new FormControl 
    });
  }
  
  onSubmit() {
    this.pokemonService.getPokemon(this.searchForm.value).subscribe(() => {
      this.router.navigate(['/pokemon'])
    })
    console.log(this.searchForm);
  }
}


