import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dude-hero',
  standalone: true,
  imports: [],
  templateUrl: './dude-hero.component.html',
  styleUrl: './dude-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DudeHeroComponent implements AfterViewInit{
  
@ViewChild('svgContainer', {read: ElementRef}) svgContainer!: ElementRef
  
  ngAfterViewInit(): void {

    const pathes = this.svgContainer.nativeElement.querySelectorAll('path')

    for (let i = 0; i < pathes.length; i++) {
      let length = Math.ceil(pathes[i].getTotalLength())
      this.setStyle(pathes[i], length)
    }
  }

  setStyle(el:SVGPathElement, lenght?:number) {
    el.style.setProperty('stroke-dasharray', `${lenght}px`)
    el.style.setProperty('stroke-dashoffset', `${lenght}px`)
  }
}
