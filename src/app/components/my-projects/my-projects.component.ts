import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MyProjectsCardComponent } from "../my-projects-card/my-projects-card.component";
import { Observable } from 'rxjs';
import { FirebaseServiceService } from '../../service/firebaseServise/firebase-service.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectCard } from '../../models/cards-model';
import { BooleanTransformPipe } from '../../pipes/boolean-transform/boolean-transform.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconTransformPipe } from '../../pipes/icon-transform/icon-transform.pipe';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [
    MyProjectsCardComponent,
    CommonModule,
    TranslateModule,
    BooleanTransformPipe,
    FontAwesomeModule,
    IconTransformPipe
  ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProjectsComponent implements OnInit {

  cards$!:Observable<ProjectCard[]>
  
  constructor(
    private fireBase: FirebaseServiceService
  ){}

  ngOnInit(): void {
    this.cards$ = this.fireBase.getContent('myProjects.projectsCards')
   
    
  }
}
