import {Component, inject, viewChild, ElementRef, AfterViewInit} from '@angular/core';
import {GifListComponent} from '../../components/gif-list/gif-list.component';
import {GifsService} from '../../services/gifs.service';
import {ScrollStateService} from '../../../shared/services/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  imports: [
    //GifListComponent
  ],
  styleUrl: './trending-page.component.css'
})
export default class TrendingPageComponent implements AfterViewInit{

  gifService = inject(GifsService);
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event: Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
