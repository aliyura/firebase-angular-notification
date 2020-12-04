import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//firebase stuff
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MessagingService } from './services/messaging.service';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
