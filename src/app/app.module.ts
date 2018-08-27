import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'bootstrap/scss/bootstrap.scss';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '../ServiceWorker/serviceWorker.module';
import { AppComponent } from './app.component';
import './app.scss';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent],
    imports: [
      BrowserModule,
      HttpClientModule,
      ServiceWorkerModule.register('/sw.js', { enabled: environment.production }),
 ],
})
export class AppModule {}
