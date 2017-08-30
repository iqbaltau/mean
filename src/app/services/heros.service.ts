import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export class Hero {
  id: number;
  name: string;
}
@Injectable()
export class HerosService {
  HEROES: any[];
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(
    private http: Http,
  ) { }

  // Get all posts from the API
  getAllHeroes(url): Promise<any> {
    return this.http.get(url).toPromise()
      .then( (res: Response) => res.json() || {})
      .catch((error: any)=> Promise.reject(error.message || error));
  }
  // getHero(url) {
  //   console.log(url);
  //   return this.http.get(url).map(res => {
  //     console.log(res.json());
  //     res.json() as Hero;
  //   });
  // }

  getHero(url): Promise<any> {
    // return this.http.get(url).map(res => res.json());
    return this.http.get(url).toPromise()
      .then( (res: Response) => res.json() || {})
      .catch((error: any)=> Promise.reject(error.message || error));
  }

  update(url, hero): Promise<any>{
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch((error: any)=> Promise.reject(error.message || error));
  }
  
}
