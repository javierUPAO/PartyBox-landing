import { Component } from '@angular/core';
import { Footer } from '../../shared/componentes/footer/footer';
import { NavBar } from '../../shared/componentes/nav-bar/nav-bar';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Footer,NavBar],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {

}
