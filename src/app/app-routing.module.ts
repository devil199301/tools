import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateComponent } from './filesystem/generate/generate.component';
import { MainComponent } from './layout/main/main.component';
import { HelloComponent } from './layout/hello/hello.component';
import { SettingComponent } from './filesystem/setting/setting.component';
import { DeletedComponent } from './filesystem/deleted/deleted.component';
import { SlotmachineComponent } from './template/slotmachine/slotmachine.component';
import { ListComponent } from './trello/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'hello',
        pathMatch: 'full'
      },
      {
        path: 'Generate',
        component: GenerateComponent
      },
      {
        path: 'Deleted',
        component: DeletedComponent
      },
      {
        path: 'Setting',
        component: SettingComponent
      },
      {
        path: 'slottemplate',
        component: SlotmachineComponent
      }, {
        path: 'trello',
        component: ListComponent
      },
      {
        path: 'hello',
        component: HelloComponent
      },
      {
        path: '**',
        component: HelloComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
