import { Directive, ElementRef, Input } from '@angular/core';
import { InViewDirective } from '../base-in-view-directive/in-view.directive';

@Directive({
  selector: '[appDelayInView]',
  standalone: true
})
export class DelayInViewDirective extends InViewDirective{

  @Input() delay:number = 0
  
  constructor(element: ElementRef) {
    super(element)
  }
  
  protected override addClass() {
    setTimeout(() => {
      this.element.nativeElement.classList.add('in-view')
    }, this.delay)
  }

}
