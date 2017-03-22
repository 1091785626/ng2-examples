import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
// main
import { MainContentComponent } from '../../../components/register/main/content/content.component';

@NgModule({
	imports: [
		SharedModule,
		RouterModule
	],
	declarations: [
		MainComponent,
		MainContentComponent
	]
})
export class MainModule {
}
