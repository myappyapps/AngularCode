import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactListComponent } from './contact-list/contact-list.component';
const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
    },
    { 
        path : 'login',
        component : LoginComponent
    
    },
    { 
        path : 'dashboard',
        component : DashboardComponent,
        children:[
            { 
                path : 'accounts',
                component : AccountListComponent
            
            },  
            { 
                path : 'contacts',
                component : ContactListComponent
            
            }
        ]
    },
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

 }

