import { PostComponent } from './../../posts/post/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../../material.module';

@NgModule({
  declarations: [HomeComponent, PostComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule]
})
export class HomeModule { }
