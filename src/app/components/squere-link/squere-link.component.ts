import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-squere-link',
  standalone: true,
  imports: [],
  templateUrl: './squere-link.component.html',
  styleUrl: './squere-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquereLinkComponent {
  @Input() link!:string
}
