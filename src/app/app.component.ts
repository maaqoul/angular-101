import { Component } from "@angular/core"

interface Nav {
  link: string,
  name: string,
  exact: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  nav: Nav[] = [{
    link: '/',
    name: 'home',
    exact: true
  },
  {
    link: 'passengers',
    name: 'passengers',
    exact: false
  },
  {
    link: '/asdasd',
    name: '404',
    exact: false
  }]

}
