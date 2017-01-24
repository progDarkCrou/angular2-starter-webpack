import { NgModule } from "@angular/core";
import { adminRoutes } from "./admin.routes";
import { AdminComponent } from "./components/admin.component";

@NgModule({
  imports: [
    adminRoutes
  ],
  declarations: [
    AdminComponent
  ]
})
export class AdminModule {

}
