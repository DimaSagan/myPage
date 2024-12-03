import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FirebaseServiceService } from './service/firebaseServise/firebase-service.service';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(
    private firebaseService: FirebaseServiceService,
    private translateService: TranslateService,
    private router: Router,
    private location: Location
  ) { }
  
  ngOnInit(): void {
    const defaultLanguage = 'en'
    this.translateService.setDefaultLang(defaultLanguage)

    this.firebaseService.getTranslation(defaultLanguage).subscribe({
      next: (translation) => {
        this.translateService.use(defaultLanguage)
      },
      error:(err)=> console.error('Failed to load translation', err)
    }) 

     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url) {
          setTimeout(() => {
            this.location.replaceState('home-page')
          },1000)
        }
      }
    })
  }
}
