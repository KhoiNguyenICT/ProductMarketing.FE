import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactImportComponent } from './contact-import/contact-import.component';
import { ContactChangeComponent } from './contact-change/contact-change.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ContactComponent,
    ContactListComponent,
    ContactImportComponent,
    ContactChangeComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
