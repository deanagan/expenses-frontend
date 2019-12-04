import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


// services
import { EntryService } from './entry.service';
import { AppRouterModule } from './app.router.module';
import { HttpClientModule } from '@angular/common/http';

// material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // material design
    AppRouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule

  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
