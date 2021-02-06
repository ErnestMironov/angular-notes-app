import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { NoteComponent } from './note/note.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, CardComponent, ModalComponent, NoteComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
