import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DudeAboutMeComponent } from "../dude/dude-about-me/dude-about-me.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FirebaseServiceService } from '../../service/firebaseServise/firebase-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    DudeAboutMeComponent,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent implements OnInit {

  paragraphs$!: Observable<[]>

  constructor(
    private fireBase: FirebaseServiceService
  ) { }
  
  
  
  ngOnInit(): void {
    this.paragraphs$ = this.fireBase.getContent('aboutMe.content')
  }
}
