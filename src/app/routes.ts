import { Routes } from '@angular/router';
export const routes:Routes=[
{path:'',loadComponent:()=>import('./home').then(m=>m.Home)},
{path:'wings/:wing',loadComponent:()=>import('./wing').then(m=>m.Wing)},
{path:'forms/:kind',loadComponent:()=>import('./registration').then(m=>m.Registration)},
{path:'admin',loadComponent:()=>import('./admin').then(m=>m.Admin)},
{path:':page',loadComponent:()=>import('./page').then(m=>m.Page)},
{path:'**',redirectTo:''}];
