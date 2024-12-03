import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { InViewDirective } from '../../../directives/intersection-observer/base-in-view-directive/in-view.directive';

@Component({
  selector: 'app-dude-about-me',
  standalone: true,
  imports: [InViewDirective],
  templateUrl: './dude-about-me.component.html',
  styleUrl: './dude-about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DudeAboutMeComponent implements  AfterViewInit{

  @ViewChild('svgContainer', { read: ElementRef }) svgContainer!: ElementRef;
 

  ngAfterViewInit(): void {
    const pathes = this.svgContainer.nativeElement.querySelectorAll('path')
   
    for (let i = 0; i < pathes.length; i++) {
      let length = Math.ceil(pathes[i].getTotalLength())
      this.setStyle(pathes[i], length)
    }
    
  }

  setStyle(el:SVGPathElement, lenght?: number) {
    el.style.setProperty('stroke-dasharray', `${lenght}px`)
    el.style.setProperty('stroke-dashoffset', `${lenght}px`)
  }

}
