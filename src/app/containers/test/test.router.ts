import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesTestComponent } from './test.component';
import { MainComponent } from './main/main.component';
import { SecondComponent } from './second/second.component';
import { LearnComponent } from './learn/learn.component';
import { PersonsComponent } from './persons/persons.component';

const routes: Routes = [
	{
		path: '',
		component: PagesTestComponent,
		children: [
			{
				path: '',
				redirectTo: 'learn',
				pathMatch: 'full'
			},
			{
				path: 'main',
				component: MainComponent
			},
			{
				path: 'second',
				component: SecondComponent
			},
			{
				path: 'learn',
				component: LearnComponent
			},
			{
				path: 'persons',
				component: PersonsComponent
			},
			{
				path: '*',
				redirectTo: 'persons',
				pathMatch: 'full'
			}
		]
	}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
