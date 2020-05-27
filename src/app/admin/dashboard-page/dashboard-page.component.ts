import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { Post } from '../shared/interfaces';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  pSub: Subscription;
  dSub: Subscription;
  searchStr: string;

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.pSub = this.postService.getAll().subscribe(posts => {
      this.posts = posts;
    })

  }
  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }

  remove(id: string) {
    this.dSub = this.postService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => {
        post.id !== id;
      })
    })
  }

}
