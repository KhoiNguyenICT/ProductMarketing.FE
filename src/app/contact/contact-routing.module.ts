import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactImportComponent } from './contact-import/contact-import.component';
import { ContactChangeComponent } from './contact-change/contact-change.component';
import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ContactComponent,
        children: [
            {
                path: 'contact-change',
                component: ContactChangeComponent
            },
            {
                path: 'contact-import',
                component: ContactImportComponent
            },
            {
                path: 'contact-list',
                component: ContactListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }
