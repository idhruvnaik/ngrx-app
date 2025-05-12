import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from 'src/app/shared/store/blog/blog.model';
import { getBlogs } from 'src/app/shared/store/blog/blog.selector';
import { AppModel } from 'src/app/shared/store/global/app.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogList!: BlogModel[];

  constructor(private store: Store<AppModel>) {}
  ngOnInit(): void {
    this.store.select(getBlogs).subscribe((item) => {
      this.blogList = item;
      console.log(this.blogList);
    });
  }
}
