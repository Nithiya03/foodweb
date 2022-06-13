import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessdeniedGuard } from './authguard/accessdenied.guard';
import { AuthguardGuard } from './authguard/authguard.guard';
import { AboutComponent } from './pages/about/about.component';
import { FinalPageComponent } from './pages/final-page/final-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent,canActivate:[AuthguardGuard]},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent,canDeactivate:[AccessdeniedGuard]},
  {path:'order',component:FinalPageComponent,canActivate:[AuthguardGuard]},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
