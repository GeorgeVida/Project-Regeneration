import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCallComponent } from './api-call/api-call.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameComponent } from './game/game.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '' , component : ApiCallComponent },
  {path: 'game-details' , component :GameDetailsComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: SignUpComponent},

  { path: '**', pathMatch: 'full',
  component: ErrorpageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
