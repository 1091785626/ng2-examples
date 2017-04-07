import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
// main
import { MainContentComponent } from '@components/login/main/content/content.component';
import { SharedModule } from '@shared/shared.module';
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
