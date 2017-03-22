import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RegisterComponent } from './register.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
	{
		path: '',
		component: RegisterComponent,
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
