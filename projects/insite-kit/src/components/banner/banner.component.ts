import { Component, Input } from '@angular/core';

@Component({
  selector: 'ik-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() type: 'info' | 'danger' | 'warning' = 'warning';
}
