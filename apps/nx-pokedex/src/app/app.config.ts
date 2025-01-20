import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    /* Uncomment if immediate animation is needed in the application (@see: https://v18.angular.dev/guide/animations) */
    //provideAnimations
    provideAnimationsAsync(),
  ],
};
