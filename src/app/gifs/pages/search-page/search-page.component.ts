import {Component, inject, signal} from '@angular/core';
import {GifListComponent} from '../../components/gif-list/gif-list.component';
import {GifsService} from '../../services/gifs.service';
import {Gif} from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  imports: [
    GifListComponent
  ],
  styleUrl: './search-page.component.css'
})
export default class SearchPageComponent {
  gifService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      console.log(resp);
      this.gifs.set(resp);
    });
    console.log({query});
  }
}
