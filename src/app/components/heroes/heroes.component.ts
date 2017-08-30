import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HerosService} from '../../services/heros.service';
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title  = 'Tour of Heroess';
  heroes: any = [];

  selectedHero: Hero;
  constructor( private router: Router, private heroesService: HerosService) { }

  ngOnInit() {
    this.heroesService.getAllHeroes('/api/heroes').then(heroes => {
      this.heroes = heroes;
    }).catch(error => console.log(error));
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/herodetail', this.selectedHero.id]);
  }
}
