import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbButtonsModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MessagesModule } from './messages/messages.module';
// import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { OtherModule } from './other/other.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Topic01Component } from './empty-parent-route/topic01/topic01.component';
import { Page404Component } from './page-404/page-404.component';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,

    // Need to do this in version <6 of Angular so bootstraps services that are associated with the widget are registrered with an injector (in this case root injector)
    NgbButtonsModule.forRoot(),
    NgbDatepickerModule.forRoot(),

    MessagesModule,
    // ProductModule, commented out since we are going to lazy load this module
    UserModule,
    OtherModule,
    AppRoutingModule,       // IMPORTANT, put this last, else wildcard route will catch feature module:s routes -- IF however routes were configured inline in this model they would have been processed last
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    Topic01Component,
    Page404Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
