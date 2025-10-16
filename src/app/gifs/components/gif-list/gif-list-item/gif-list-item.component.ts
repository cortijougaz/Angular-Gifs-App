import { Component } from '@angular/core';
import {input} from '@angular/core';

@Component({
  selector: 'gif-list-item',
  templateUrl: './gif-list-item.component.html',
  styleUrl: './gif-list-item.component.css'
})
export class GifListItemComponent {
imageUrl = input.required<string>();
}
