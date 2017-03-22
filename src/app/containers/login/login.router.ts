import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
		children: [
			{
				path: '',
				redirectTo: 'main',
				pathMatch: 'full'
			},
			{
				path: 'main',
				component: MainComponent
			},
			{
				path: '**',
				redirectTo: 'main',
				pathMatch: 'full'
			}
		]
	}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
