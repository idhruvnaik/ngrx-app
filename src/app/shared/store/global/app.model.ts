import { BlogModel } from '../blog/blog.model';
import { CounterModel } from '../counter.model';

export interface AppModel {
  counter: CounterModel;
  blog: BlogModel;
}
