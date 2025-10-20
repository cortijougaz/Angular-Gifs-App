import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';
import {computed} from '@angular/core';
import {GifsService} from '../../services/gifs.service';
import {GifListComponent} from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-gif-history',
  templateUrl: './gif-history.component.html',
  imports: [
    GifListComponent
  ],
  styleUrl: './gif-history.component.css'
})
export default class GifHistoryComponent {

  gifService = inject(GifsService);

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map( (params) => params['query'])
  ));

  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
