import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CvContentComponent } from './cv-content/cv-content.component';
import { ContactDetailsComponent } from './header/contact-details/contact-details.component';
import { SectionComponent } from './cv-content/section/section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LifePeriodComponent } from './cv-content/life-period/life-period.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    CvContentComponent,
    ContactDetailsComponent,
    SectionComponent,
    LifePeriodComponent,
    FooterComponent,
    LoginComponent,
    CreateUserComponent,
    HomeComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
