import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SuppliersComponent } from './supplier/suppliers.component';

import { ClientsComponent } from './client/clients.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'suppliers', component: SuppliersComponent },

  { path: 'client', component: ClientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
