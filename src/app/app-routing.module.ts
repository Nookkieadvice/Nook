import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//โหลดหน้า HOME and ABOUT
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  {
    path:"1",
    component: HomeComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
