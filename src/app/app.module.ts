import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SuppliersComponent } from './supplier/suppliers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientsComponent } from './client/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { YesNoPipe } from './yes-no.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SuppliersComponent,
    ClientsComponent,
    YesNoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
