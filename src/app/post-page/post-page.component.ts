import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../admin/shared/interfaces';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
