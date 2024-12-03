import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LearningCardComponentComponent } from "../learning-card-component/learning-card-component.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { FirebaseServiceService } from '../../service/firebaseServise/firebase-service.service';
import { Observable} from 'rxjs';
import { CommonModule } from '@angular/common';
import { LearningCard } from '../../models/cards-model';
import { IconTransformPipe } from '../../pipes/icon-transform/icon-transform.pipe';
import { LightDirective } from '../../directives/mouse-light/light.directive';

@Component({
  selector: 'app-learning-component',
  standalone: true,
  imports: [
    LearningCardComponentComponent,
    FontAwesomeModule,
    TranslateModule,
    CommonModule,
    IconTransformPipe,
    LightDirective
  ],
  templateUrl: './learning-component.component.html',
  styleUrl: './learning-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearningComponentComponent implements OnInit {

  cards$!: Observable<LearningCard[]>
  constructor(
    private fireBase: FirebaseServiceService
  ) { }

  ngOnInit(): void {
    this.cards$ = this.fireBase.getContent('learning.learningCards')
  }
}
