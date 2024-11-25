import { ChangeDetectionStrategy, Component, OnInit, Signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BurgerMenuServiceService } from '../../service/burger-menu-service/burger-menu-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BurgerMenuComponent {
  constructor(
    public burgerMenuService: BurgerMenuServiceService
  ) { }
  

}
