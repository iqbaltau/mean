import 'rxjs/add/operator/switchMap';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HerosService } from '../../services/heros.service';

export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input()
  hero: any;
  heroes: any = [];
  constructor(
    private heroService: HerosService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero('/api/heroes/' + params.get('id')))
      .subscribe(hero => {
        this.hero = hero;
      });
  }
  save(): void {
    this.heroService.update('/api/heroes/'+this.hero.id,this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
