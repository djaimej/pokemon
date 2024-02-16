import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Info } from '@interfaces/info';
import { PokemonService } from '@services/pokemon.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {
  id: string;
  info!: Info;
  page: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = param != null ? param : '1';
    this.page = 1;
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.page = params['page'];
      }
    );
  }

  ngOnInit(): void {
    this.pokemonService.getPokemonInfo(this.id).subscribe(res => {
      if (res) {
        this.info = res;
      }
    });
  }

  back(): void {
    this.router.navigate([''],
      { queryParams: { page: this.page } }
    );
  }
}
