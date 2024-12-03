import { ChangeDetectionStrategy, Component, OnInit, Signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BurgerMenuServiceService } from '../../service/burger-menu-service/burger-menu-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [TranslateModule,CommonModule, RouterLink],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BurgerMenuComponent {
  constructor(
    public burgerMenuService: BurgerMenuServiceService
  ) { }
  
  clickOnLink() {
    this.burgerMenuService.closeMenu()
  }

}
