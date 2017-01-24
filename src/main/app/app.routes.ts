import { RouterModule } from "@angular/router";
import { SerialComponent } from "./components/serial/serial.component";

export const routes = RouterModule.forRoot([
  {
    path: 'serial/:serial',
    component: SerialComponent
  },
  {
    path: 'admin',
    loadChildren: () => require('es6-promise!./modules/admin/admin.module.ts')('AdminModule')
  }
]);
