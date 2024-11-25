import { ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectCard } from '../../models/cards-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects-card',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './my-projects-card.component.html',
  styleUrl: './my-projects-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProjectsCardComponent implements OnInit{
  @Input() card!: ProjectCard
  @Input() reverse!: boolean 

  // setReverse = this.reverse
  
  ngOnInit(): void {
    // console.log(this.reverse)
  }
}
