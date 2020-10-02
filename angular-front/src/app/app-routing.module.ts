import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {ShowComponent} from "./project/show/show.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'project/show', component: ShowComponent },
  ]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
