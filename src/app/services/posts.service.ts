import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostsService {

  constructor(private http: Http) { } 

  // Get all posts from the API
  getAllPosts(url): Promise<any>{
    return this.http.get(url).toPromise()
    .then( (res: Response) => res.json() || {})
    .catch((error: any)=> Promise.reject(error.message || error));
  }

}
