import { createReducer, on } from '@ngrx/store';
import { BlogState } from './blog.state';
import { loadBlog } from './blog.action';

const _blogReducer = createReducer(
  BlogState,
  on(loadBlog, (state) => {
    return {
      ...state,
    };
  })
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
