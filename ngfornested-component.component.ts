import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfornested-component',
  templateUrl: './ngfornested-component.component.html',
  styleUrls: ['./ngfornested-component.component.sass']
})
export class NgfornestedComponentComponent  {
public date=[
{catogory :'Elotonic product'
product :['samsung TV','Mobile']

};
{
catogory :'shoes',
product :['nake casual','Less chopper']

}

];
  

}
