import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VprofileComponent } from './vprofile/vprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { RouterModule, Routes } from '@angular/router';

const userModule: Routes = [
  { path: 'myprofile', component: VprofileComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: '', redirectTo: 'user/myprofile', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [VprofileComponent, EditprofileComponent],
  imports: [CommonModule, RouterModule.forChild(userModule)],
})
export class UserModule {}
