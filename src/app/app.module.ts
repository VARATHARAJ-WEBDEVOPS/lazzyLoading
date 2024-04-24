import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './modeules/admin/admin.module';
import { UserModule } from './modeules/user/user.module';
import { WildcardsComponent } from './wildcards/wildcards.component';

@NgModule({
  declarations: [
    AppComponent,
    WildcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
