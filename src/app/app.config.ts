import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { TranslateModule} from "@ngx-translate/core";
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',  
      anchorScrolling: 'enabled' 
      })
    ),
    importProvidersFrom(
      TranslateModule.forRoot()
    ),
  ]
};
