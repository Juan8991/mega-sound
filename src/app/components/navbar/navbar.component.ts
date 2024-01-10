import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public invisibleMenu:boolean = false;
  public breakPoints:string[]= [
  '(max-width: 599.98px) and (orientation: portrait)',
  '(max-width: 959.98px) and (orientation: landscape)',
  '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)',
  '(min-width: 840px) and (orientation: portrait)',
  '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  '(min-width: 1280px) and (orientation: landscape)']
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset, // Pantallas pequeñas (menos de 768px)
      Breakpoints.Tablet,  // Pantallas medianas (entre 768px y 1024px)
      Breakpoints.Web      // Pantallas grandes (más de 1024px)
    ]).subscribe(result => {
      if (result.matches) {
        console.log("Entro")
        console.log(result)
        // Cambia invisibleMenu según el tipo de pantalla
        if(result.breakpoints["(max-width: 599.98px) and (orientation: portrait)"]){
          this.invisibleMenu = false;
        }else{
          this.invisibleMenu = true;
        }

      }
    });
  }
  ngOnDestroy() {
    // Desuscribirse para evitar pérdidas de memoria
    if (this.breakpointObserver) {
      this.breakpointObserver.ngOnDestroy();
    }
  }


}
