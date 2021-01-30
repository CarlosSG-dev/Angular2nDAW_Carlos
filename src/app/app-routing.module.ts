import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MonedesDetailComponent } from './monedes/monedes-detail/monedes-detail.component';
import { MonedesListComponent } from './monedes/monedes-list/monedes-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'monedes', component: MonedesListComponent},
  {path: 'moneda/:id', component: MonedesDetailComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
