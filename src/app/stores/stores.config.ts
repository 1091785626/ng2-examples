import { StoreModule, provideStore } from '@ngrx/store';

import { rootReducer } from '../reducers/rootReducer';

export const appStoring = StoreModule.provideStore(rootReducer);
