import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {RouterLinkActive} from '@angular/router';
import {inject} from '@angular/core';
import {GifsService} from '../../../services/gifs.service';

interface MenuOptions {
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {
  gifService = inject(GifsService);
  menuOptions: MenuOptions[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line',
    },
    {
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass',
    }
    ];
}
