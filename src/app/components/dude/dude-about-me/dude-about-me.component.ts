import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dude-about-me',
  standalone: true,
  imports: [],
  templateUrl: './dude-about-me.component.html',
  styleUrl: './dude-about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DudeAboutMeComponent {

}
