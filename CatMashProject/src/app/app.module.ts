import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { VoteComponent } from './vote/vote.component';
import { CatNotFoundComponent } from './cat-not-found/cat-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    VoteComponent,
    CatNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
