import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Application components and services
import { AppComponent } from './app.component';
import { CoreModule } from './shared/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FormLoginModule } from './form-login/form-login-module';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './layout/header/header.component';
import { ViewQueueComponent } from './view-queue/view-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    ViewQueueComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormLoginModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
