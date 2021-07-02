import { Component, ViewEncapsulation } from "@angular/core"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = "sqli Angular training"

  numberOne: number = 1;
  numberTwo: number = 2;

  isHappy: boolean = false;

  logo: string = "https://suisse.sqli.com/logo.png";

  name: string = "";


}
