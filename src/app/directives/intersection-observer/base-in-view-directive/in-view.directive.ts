import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true
})
export class InViewDirective implements OnInit{

  @Input() rootMargin: string = '0px'
  @Input() threshold: number = 0.1

  constructor(protected element: ElementRef) { }

  ngOnInit(): void {
   const options = {
      root: null,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    }
    const  observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.addClass()
        }
      })
    }, options)
  
    observer.observe(this.element.nativeElement)
  }

  protected addClass() {
    this.element.nativeElement.classList.add('in-view')
  }

  
}
