import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsCardComponent {
  @Input() title!:string
}
