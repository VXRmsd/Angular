import { Component } from '@angular/core';
//import { environment } from 'src/environments/environment.prod';
import {environment} from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  monthsArray=['Jan','Feb','Mar']

  // @Environment('prod')
  appTitle= environment.appTitle

  changeMonths(e){
    console.log(e.target.value)
  }

}
