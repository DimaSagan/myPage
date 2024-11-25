import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurgerMenuServiceService {

  private isOpenSignal = signal(false)

  get isOpen() {
    return this.isOpenSignal
  }

  toggleMenu() {
    this.isOpenSignal.set(!this.isOpenSignal())
  }

  closeMenu() {
    this.isOpen.set(false)
  }
}
