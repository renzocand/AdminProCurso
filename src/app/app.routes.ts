import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
   
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,  {useHash:true} )],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
