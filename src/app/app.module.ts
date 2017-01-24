import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app.component";
import { SerialComponent } from "./components/serial/serial.component";
import { routes } from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    routes
  ],
  declarations: [
    AppComponent,
    SerialComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
