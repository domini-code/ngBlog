import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPostsComponent } from './list-posts.component';

const routes: Routes = [{ path: '', component: ListPostsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPostsRoutingModule { }
