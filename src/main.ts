import { bootstrapApplication } from '@angular/platform-browser';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import { routes } from './app/routes';
bootstrapApplication(App,{providers:[provideZoneChangeDetection({eventCoalescing:true}),provideHttpClient(),provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration:'top',anchorScrolling:'enabled'}))]}).catch(console.error);
