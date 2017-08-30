import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import {PostsService} from './services/posts.service';
import {HerosService} from './services/heros.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'herodetail/:id',
    component: HeroDetailComponent
  }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  declarations: [
    AppComponent,
    PostsComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [PostsService, HerosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
