import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPostsRoutingModule } from './list-posts-routing.module';
import { ListPostsComponent } from './list-posts.component';


@NgModule({
  declarations: [ListPostsComponent],
  imports: [
    CommonModule,
    ListPostsRoutingModule
  ]
})
export class ListPostsModule { }
