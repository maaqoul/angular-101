import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular Modules
    BrowserModule,

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
