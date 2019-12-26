import { PostService } from './../../posts/post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { PostI } from '../../../shared/models/post.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts$: Observable<PostI[]>;

  constructor(private postSvc: PostService) { }

  ngOnInit() {
    this.posts$ = this.postSvc.getAllPosts();
  }
}
