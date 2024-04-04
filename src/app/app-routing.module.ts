import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataInputComponent } from './data-input/data-input.component';
import { ResultDisplayComponent } from './result-display/result-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full'},
  { path: 'input', component: DataInputComponent },
  { path: 'results', component: ResultDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }