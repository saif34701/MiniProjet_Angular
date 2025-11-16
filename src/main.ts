import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app';
import 'zone.js';  

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});
