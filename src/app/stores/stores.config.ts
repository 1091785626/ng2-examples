import { StoreModule, provideStore } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';

import { rootReducer } from '../reducers/rootReducer';

export const appStoring = StoreModule.provideStore(rootReducer);
export const appRouterStoring = RouterStoreModule.connectRouter();
