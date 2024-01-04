import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { CategoryEffects, categoryFeature } from '@org/category';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes), 
    provideHttpClient(),
    provideAnimations(),
    provideStore(),
    provideState(categoryFeature),
    provideEffects([CategoryEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })  
  ],
};
