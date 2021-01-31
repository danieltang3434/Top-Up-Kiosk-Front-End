import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopUpComponent } from './top-up/top-up.component';
import { PageStartingComponent } from './page-starting/page-starting.component';

const routes: Routes = [
  { path: '', redirectTo: '/page-starting', pathMatch: 'full' },
  { path: 'top-up/:card_id', component: TopUpComponent },
  { path: 'page-starting', component: PageStartingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
