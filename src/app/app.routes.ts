import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UsersigningComponent } from './components/usersigning/usersigning.component';
import { AddonboarduserComponent } from './components/addonboarduser/addonboarduser.component';
import { AddemployeComponent } from './components/addemploye/addemploye.component';
import { SelffillformComponent } from './components/selffillform/selffillform.component';
import { ViewuserinfoComponent } from './components/viewuserinfo/viewuserinfo.component';
import { AuthComponent } from './components/authcomponent/authcomponent.component';
import { AuthguardService } from './services/authguard.service';

export const routes: Routes = [
    {
        path: '', component: SelffillformComponent
    },

    { path: 'admin', component: AuthComponent },
    { path: 'admin-logout', redirectTo: '/admin', pathMatch: 'full'  },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardService] },
    { path: 'success', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to dashboard by default

    {
        path: 'add-member', component: AddonboarduserComponent, canActivate: [AuthguardService]
    },
    {
        path: 'add-employe', component: AddemployeComponent, canActivate: [AuthguardService]
    }, {
        path: 'user-details/:userId', component: ViewuserinfoComponent,
        children: [{ path: 'edit', component: AddemployeComponent }
        ], canActivate: [AuthguardService]
    }


    , {
        path: 'fill-your-info', component: SelffillformComponent
    }

];
