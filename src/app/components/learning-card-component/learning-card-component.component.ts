import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-learning-card-component',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './learning-card-component.component.html',
  styleUrl: './learning-card-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearningCardComponentComponent{
  @Input() title!: string
  @Input() icon!: string
  @Input() date!: string
  @Input() teacher!: string
  @Input() description!: string
  
}
