import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinearSearchComponent } from './linear-search/linear-search.component';
import { CodeCheckerComponent } from './code-checker/code-checker.component';

const routes: Routes = [
  { path: '', component: CodeCheckerComponent },
  { path: 'linear-search', component: LinearSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchingRoutingModule { }
