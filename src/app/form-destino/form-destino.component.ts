import { Component, OnInit } from '@angular/core';

interface Ambiente{
  value:string,
  viewValue:string
}
@Component({
  selector: 'app-form-destino',
  templateUrl: './form-destino.component.html',
  styleUrls: ['./form-destino.component.css']
})
export class FormDestinoComponent implements OnInit {

  selectedAmbiente: String;

  constructor() { }

  ngOnInit(): void {
  }

  ambientes:Ambiente[]=[
    {value:'Produccion', viewValue:'Producción'},
    {value:'Calidad', viewValue:'Calidad'},
    {value:'Desarrollo', viewValue:'Desarrollo'},
  ];



}
