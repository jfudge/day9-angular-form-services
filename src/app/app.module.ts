import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Just like the routeing module, if I want to implement forms, I need a form module
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';

// Remember that app.module.ts is the core app module. It's the scaffold for
// all components, services and modules for your application.
@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
