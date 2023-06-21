import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LobbyPageComponent } from './components/lobby-page/lobby-page.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';

const routes: Routes = [
  { path: '**', component: LoginPageComponent },
  { path: 'lobby', component: LobbyPageComponent},
  { path: 'chat', component: ChatPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
