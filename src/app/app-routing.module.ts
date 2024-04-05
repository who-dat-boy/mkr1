import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultDisplayComponent } from './result-display/result-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full'},
  { path: 'results', component: ResultDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }