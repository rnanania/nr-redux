import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';

const routes: Routes = [
  /*
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: 'todos',
    component: TodoOverviewComponent
  },
  {
    path: '**',
    component: TodoListComponent
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
