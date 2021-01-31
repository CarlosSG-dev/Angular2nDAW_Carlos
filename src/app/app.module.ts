import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MonedesListComponent } from './monedes/monedes-list/monedes-list.component';
import { MonedesItemComponent } from './monedes/monedes-item/monedes-item.component';
import { HomeComponent } from './components/home/home.component';
import { MonedesService } from './monedes/monedes.service';
import { MonedesDetailComponent } from './monedes/monedes-detail/monedes-detail.component';
import { ToEurPipe } from './monedes/to-eur.pipe';
import { FilterMonedesPipe } from './monedes/filter-monedes.pipe';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MonedesListComponent,
    MonedesItemComponent,
    HomeComponent,
    MonedesDetailComponent,
    ToEurPipe,
    FilterMonedesPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MonedesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
