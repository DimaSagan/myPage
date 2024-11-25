import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkillsCardComponent } from "../skills-card/skills-card.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { faAngular, faGitAlt, faHtml5, faJs, faSass } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills-component',
  standalone: true,
  imports: [
    SkillsCardComponent,
    FontAwesomeModule,
    TranslateModule,
  ],
  templateUrl: './skills-component.component.html',
  styleUrl: './skills-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponentComponent {
  // icons = [faHtml5, faSass, faJs, faAngular, faGitAlt]
  iconsAndTitles = [
    {
      title: 'HTML5',
      icon: faHtml5
    },
    {
      title: 'SASS',
      icon: faSass
    },
    {
      title: 'Java Script',
      icon: faJs
    },
    {
      title: 'Angular',
      icon: faAngular
    },
    {
      title: 'Git',
      icon: faGitAlt
    }
  ]
}
