import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modeules/user/login/login/login.component';
import { WildcardsComponent } from './wildcards/wildcards.component';

const routes: Routes = [

  { path: 'login', loadChildren:()=> import('./modeules/user/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren:()=> import('./modeules/user/signup/signup.module').then(m => m.SignupModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: WildcardsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
