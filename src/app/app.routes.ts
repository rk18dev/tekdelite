import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UsersigningComponent } from './components/usersigning/usersigning.component';
import { AddonboarduserComponent } from './components/addonboarduser/addonboarduser.component';
import { AddemployeComponent } from './components/addemploye/addemploye.component';
import { SelffillformComponent } from './components/selffillform/selffillform.component';

export const routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
           
        ]
    },
    {
        path: 'login', component: UsersigningComponent, children: [
            { path: 'signin', component: LoginComponent }
        ]
    },
    {
        path: 'add-member', component: AddonboarduserComponent
    },
    {
        path: 'add-employe', component: AddemployeComponent
    },{
        path:'fill-your-info',component:SelffillformComponent
    }

];
