import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DudeHeroComponent } from "../dude/dude-hero/dude-hero.component";
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { map, Observable, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faTelegram, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SquereLinkComponent } from "../squere-link/squere-link.component";
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    TranslateModule,
    DudeHeroComponent,
    CommonModule,
    FontAwesomeModule,
    SquereLinkComponent
],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit{
  currentLanguage$!:Observable<string> 

  icons = [faGithub, faTelegram, faDiscord, faLinkedin]
  links=['1','2','3','4']

  constructor(
    private translateService: TranslateService 
  ){}
  
  ngOnInit(): void {
    this.currentLanguage$ = this.translateService.onLangChange.pipe(
      map((event: LangChangeEvent) => event.lang),
      startWith(this.translateService.currentLang)
    )
  }
}
