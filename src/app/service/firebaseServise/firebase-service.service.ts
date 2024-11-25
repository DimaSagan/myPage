import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../enviroment/firebaseConfig';
import { getDatabase, ref, set, get, onValue, child } from 'firebase/database';
import { delay, from, map, Observable, of, switchAll, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LearningCard } from '../../models/cards-model';
@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  private database

  constructor(
    private translateService: TranslateService
  ) {
    const app = initializeApp(firebaseConfig)
    this.database = getDatabase(app)
  }

  private translationCache = new Map<string, any>()

  getTranslation(languageCode: string): Observable<any> {

    if (this.translationCache.has(languageCode)) {
      this.translateService.setTranslation(languageCode, this.translationCache.get(languageCode), true);
      return of(this.translationCache.get(languageCode));
    }

    const databaseRef = ref(this.database)
    return new Observable((observer) => {
      get(child(databaseRef, `languages/${languageCode}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const translations = snapshot.val()
            console.log('load translate')
            this.translationCache.set(languageCode, translations)
            this.translateService.setTranslation(languageCode, translations, true)
            observer.next(translations)
            observer.complete()
          } else {
            observer.error('No data evailable')
          }
        })
        .catch((error) => observer.error(error))
    })
  }

  getContent(contentKey: string): Observable<[]> {
    return this.translateService.onLangChange.pipe(
      map(() => this.translateService.get(contentKey)),
      switchAll(),
      map((content) => { return Object.values(content) as [] })
    )
  }
}
