import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../admin/shared/interfaces';
import { PostService } from '../shared/post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  posts$: Observable<Post>

  constructor(private route: ActivatedRoute,
    private postsService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params['id']);
      }))
  }
}
