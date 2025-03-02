import { Component } from '@angular/core';

@Component({
  selector: 'app-size',
  standalone: true,
  imports: [],
  templateUrl: './size.component.html',
  styleUrl: './size.component.css'
})
export class SizeComponent {

  navigateToSizeGuide() {
    window.open('https://babybasic.co.il/size-guide/?srsltid=AfmBOopWr4w5H3i5Stwe3PhsygPKAyasErI9gLk06l8trTezjagy4qiY', '_blank');
  }

}
