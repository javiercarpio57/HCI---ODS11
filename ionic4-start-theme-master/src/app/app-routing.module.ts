import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'bienvenida-test', loadChildren: './pages/bienvenida-test/bienvenida-test.module#BienvenidaTestPageModule' },
  { path: 'testhuella1', loadChildren: './pages/testhuella1/testhuella1.module#Testhuella1PageModule' },
  { path: 'testhuella2', loadChildren: './pages/testhuella2/testhuella2.module#Testhuella2PageModule' },
  { path: 'testhuella3', loadChildren: './pages/testhuella3/testhuella3.module#Testhuella3PageModule' },
  { path: 'testhuella4', loadChildren: './pages/testhuella4/testhuella4.module#Testhuella4PageModule' },
  { path: 'testhuella5', loadChildren: './pages/testhuella5/testhuella5.module#Testhuella5PageModule' },
  { path: 'testhuella6', loadChildren: './pages/testhuella6/testhuella6.module#Testhuella6PageModule' },
  { path: 'testhuella7', loadChildren: './pages/testhuella7/testhuella7.module#Testhuella7PageModule' },
  { path: 'testhuella8', loadChildren: './pages/testhuella8/testhuella8.module#Testhuella8PageModule' },
  { path: 'testhuella9', loadChildren: './pages/testhuella9/testhuella9.module#Testhuella9PageModule' },
  { path: 'testhuellaresultado', loadChildren: './pages/testhuellaresultado/testhuellaresultado.module#TesthuellaresultadoPageModule' },

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'energy', loadChildren: './pages/energy/energy.module#EnergyPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
