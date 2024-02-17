import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Result } from '@interfaces/result';
import { PokemonService } from '@services/pokemon.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  results: Result[] = [];
  page: number;
  limit: number;
  offset: number;
  paginationMaxSize: number;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.limit = 9;
    this.offset = 0;
    this.page = 1;
    this.paginationMaxSize = window.innerWidth > 500 ? 5 : 3;
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.page = params['page'] ? params['page'] : this.page;
      }
    );
  }

  ngOnInit(): void {
    this.pokemonService.getPokemonList(this.offset, 151).subscribe(res => {
      if (res) {
        this.results = res.results;
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue?',
          icon: 'error',
          confirmButtonText: 'Confirm'
        })
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.paginationMaxSize = window.innerWidth > 500 ? 5 : 3;
  }

  viewInfo(url: string): void {
    const id = url.split('/')[6];
    this.router.navigate([id],
      { queryParams: { page: this.page } }
    );
  }
}
