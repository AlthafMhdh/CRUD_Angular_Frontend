import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig, // Spread existing app configuration
  providers: [
    ...appConfig.providers || [], // Preserve existing providers
    provideHttpClient() // Add HttpClient globally
  
  ]
}).catch((err) => console.error(err));

