import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

// const routes: Routes = [
//   {
//     path: "app1/one",
//     loadChildren: () => import('./view1/view1.module').then(m => m.View1Module)
//   },
//   {
//     path: "app2/two",
//     loadChildren: () => import('./view2/view2.module').then(m => m.View2Module)
//   },
//   { path: 'app1', redirectTo: 'app1/one' }
// ];
const routes: Routes = [
  { path: 'app1/one', component: View1Component },
  { path: 'app1/two', component: View2Component },
  { path: 'app1', redirectTo: 'app1/one' },
  { path: 'full', redirectTo: '/app1' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
