import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JokeResponse } from './jokeResponse';

/*
  Generated class for the JokeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JokeProvider {
  private API_URL = 'http://api.icndb.com/jokes/random'

  constructor(public http: HttpClient) {
    console.log('Hello JokeProvider Provider');
  }

  getJoke(name?: string): Observable<JokeResponse> {
    if (!name) {
      return this.http.get<JokeResponse>(this.API_URL)
    } else {
      return this.http.get<JokeResponse>(this.API_URL + '?firstName=' + name)
    }
  }

}
