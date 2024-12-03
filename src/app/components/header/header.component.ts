import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FirebaseServiceService } from '../../service/firebaseServise/firebase-service.service';
import { ButtonComponent } from "../button/button.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRightFromBracket, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { BurgerMenuComponent } from "../burger-menu/burger-menu.component";
import { BurgerMenuServiceService } from '../../service/burger-menu-service/burger-menu-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, ButtonComponent, FontAwesomeModule, BurgerMenuComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  faArrowRightFromBracket = faArrowRightFromBracket
  faGlobe = faGlobe
  languageChange = false

  constructor(
    private translateService: TranslateService,
    private firebaseService: FirebaseServiceService,
    private burgerMenuService: BurgerMenuServiceService
  ) { }
  
  switchLanguage() {
    let language = ''
    if (!this.languageChange) {
      language = 'ua'
    } else {
      language = 'en'
    }
    this.firebaseService.getTranslation(language).subscribe({
      next: () => {
        this.translateService.use(language)
        this.languageChange = !this.languageChange
      },
      error:(err)=> console.error('Failed to load translation', err)
    })
  }

  openMenu() {
    this.burgerMenuService.toggleMenu()
  }
}
