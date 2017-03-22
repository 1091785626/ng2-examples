import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TestComponent } from './test.component';
import { MainComponent } from './main/main.component';
import { LearnComponent } from './learn/learn.component';
import { PersonsComponent } from './persons/persons.component';
import { UIComponent } from './ui/ui.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
	{
		path: '',
		component: TestComponent,
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
				path: 'learn',
				component: LearnComponent
			},
			{
				path: 'persons',
				component: PersonsComponent
			},
			{
				path: 'ui',
				component: UIComponent
			},
			{
				path: 'form',
				component: FormComponent
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
