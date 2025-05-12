import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterButtonComponent } from './component/counter-button/counter-button.component';
import { BlogComponent } from './component/blog/blog.component';

const routes: Routes = [
  { path: 'counter', component: CounterButtonComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
