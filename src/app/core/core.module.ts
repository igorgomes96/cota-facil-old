import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TabsPageModule } from './tabs/tabs.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    TabsPageModule
  ]
})
export class CoreModule { }
