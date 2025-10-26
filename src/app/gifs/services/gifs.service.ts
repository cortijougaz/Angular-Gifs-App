import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import type {GiphyResponse} from '../interfaces/giphy.interfaces';
import {signal, EffectRef, effect, computed} from '@angular/core';
import {Gif} from '../interfaces/gif.interface';
import {GifMapper} from '../mapper/gif.mapper';
import {Observable, tap, map} from 'rxjs';

const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
  const searchHistory = localStorage.getItem(GIF_KEY);
  return searchHistory ? JSON.parse(searchHistory) : {};
}

@Injectable({providedIn: 'root'})
export class GifsService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);

  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    return groups;
  });

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage: EffectRef = effect(() => {
    localStorage.setItem(GIF_KEY, JSON.stringify(this.searchHistory()));
  });

  loadTrendingGifs(): void {
    if (this.trendingGifsLoading()) return;
    this.trendingGifsLoading.set(true);

    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApikey,
        limit: 10,
        offset: this.trendingPage() * 20,
        //rating: 'g',
      }
    }).subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.update( currentGifs => [...currentGifs, ...gifs] );
      this.trendingGifsLoading.set(false);
      this.trendingPage.update((page) => page + 1);
    });
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApikey,
        limit: 10,
        offset: 0,
        q: query,
        //rating: 'g',
      }}).pipe(
      map(({data}) => data),
      map((items) => GifMapper.mapGiphyItemsToGifArray(items)),
      tap(items => {
        this.searchHistory.update(history => ({
          ...history, [query.toLowerCase().trim()]: items
        }))
      })
    );
    //.subscribe((resp) => {
    //  const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
    //});
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }

}
