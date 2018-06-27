import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateComponent } from './filesystem/generate/generate.component';
import { MainComponent } from './layout/main/main.component';
import { HelloComponent } from './layout/hello/hello.component';
import { SettingComponent } from './filesystem/setting/setting.component';
import { DeletedComponent } from './filesystem/deleted/deleted.component';

const routes: Routes = [
  {
    path:'',
  component:MainComponent,
  children:[
        {
          path:'',
          redirectTo:'hello',
          pathMatch:'full'
        },
        {
          path:'Generate',
          component:GenerateComponent
        },
        {
          path:'Deleted',
          component:DeletedComponent
        },
        {
          path:'Setting',
          component:SettingComponent
        },
        {
          path:'hello',
          component:HelloComponent
        }
          ]
        }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
