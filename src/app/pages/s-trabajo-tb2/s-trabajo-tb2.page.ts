import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-s-trabajo-tb2',
  templateUrl: './s-trabajo-tb2.page.html',
  styleUrls: ['./s-trabajo-tb2.page.scss'],
})
export class STrabajoTb2Page implements OnInit {

  private contador!: number; 

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("Componente inicializado");
    this.contador = parseInt(localStorage.getItem("contador") || "0");
    this.mostrarContador();
  }

  goBack() {
    this.navCtrl.back(); 
  }

goNext() {
  this.navCtrl.navigateForward('/opc-s-tb2'); 
}

mostrarContador() {
  console.log(`Número de clics: ${this.contador}`);
}

handleClick(incremento: number) {
  this.contador+= incremento;
  localStorage.setItem("contador", this.contador.toString());
  this.mostrarContador();
  this.goNext();
}
}
