import {Component, inject, viewChild, ElementRef} from '@angular/core';
import {GifListComponent} from '../../components/gif-list/gif-list.component';
import {GifsService} from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  imports: [
    //GifListComponent
  ],
  styleUrl: './trending-page.component.css'
})
export default class TrendingPageComponent {
  gifService = inject(GifsService);

  scrollDivRef = viewChild<ElementRef>('groupDiv');

  onScroll(event: Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;
  }
}
