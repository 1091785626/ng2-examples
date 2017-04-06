import 'style-loader!../src/assets/css/global.scss';
import 'style-loader!../src/assets/css/reset.scss';
import 'style-loader!../src/assets/css/ui.scss';
import 'style-loader!../src/assets/css/preloader.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
