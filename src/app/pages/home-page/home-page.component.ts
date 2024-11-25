import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { SkillsComponentComponent } from "../../components/skills-component/skills-component.component";
import { LearningComponentComponent } from "../../components/learning-component/learning-component.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { MyProjectsComponent } from "../../components/my-projects/my-projects.component";
import { CallbackComponent } from '../../components/callback/callback.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, SkillsComponentComponent, LearningComponentComponent, AboutMeComponent, MyProjectsComponent,CallbackComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
