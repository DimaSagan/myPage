import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLight]',
  standalone: true
})
export class LightDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.element.nativeElement.style.setProperty('--x', `${event.clientX}px`)
    this.element.nativeElement.style.setProperty('--y', `${event.clientY}px`)
  }

}
