import { Routes } from '@angular/router';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { InlineEditOneComponent } from './inline-edit-one/inline-edit-one.component';

export const routes: Routes = [
    {
        path: '', component: InlineEditComponent
    },
    {
        path: 'Way-1', component: InlineEditComponent
    },
    {
        path: 'Way-2', component: InlineEditOneComponent
    }
];
