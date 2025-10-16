import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import type {GiphyResponse} from '../interfaces/giphy.interfaces';


@Injectable({providedIn: 'root'})
export class GifsService {

  private http = inject(HttpClient);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs(): void {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
      params: {
        api_key: environment.giphyApikey,
        limit: 20,
        offset: 0,
        //rating: 'g',
      }
    });
  }
}
