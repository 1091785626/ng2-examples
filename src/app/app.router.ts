import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'test/form',
		pathMatch: 'full'
	},
	{
		path: 'test',
		loadChildren: './containers/test/test.module#PagesTestModule' ,
	},
	{
		path: 'login',
		loadChildren: './containers/login/login.module#PagesLoginModule' ,
	},
	{
		path: 'register',
		loadChildren: './containers/register/register.module#PagesRegisterModule' ,
	},
	{
		path: '**',
		redirectTo: '/login',
		pathMatch: 'full'
	}
];


export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });
