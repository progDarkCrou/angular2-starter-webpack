import { RouterModule } from "@angular/router";
import { AdminComponent } from "./components/admin.component";

export const adminRoutes = RouterModule.forChild([
  {
    path: '',
    component: AdminComponent
  }
]);
