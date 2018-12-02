import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ArticleComponent } from './article/article.component';
import { NeweststoriesComponent } from './neweststories/neweststories.component';

const routes: Routes = [
  {
    path: '', //intial path blank for root
    component: NeweststoriesComponent
  },
  {
    path: 'article/:id', 
    component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
