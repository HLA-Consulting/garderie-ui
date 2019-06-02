import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateEnfantComponent } from './create-enfant/create-enfant.component';
import { EnfantDetailsComponent } from './enfant-details/enfant-details.component';
import { EnfantsListComponent } from './enfants-list/enfants-list.component';
import { SearchEnfantsComponent } from './search-enfants/search-enfants.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateEnfantComponent,
    EnfantDetailsComponent,
    EnfantsListComponent,
    SearchEnfantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
