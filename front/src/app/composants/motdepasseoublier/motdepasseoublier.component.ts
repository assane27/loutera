import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-motdepasseoublier',
  templateUrl: './motdepasseoublier.component.html',
  styleUrls: ['./motdepasseoublier.component.css']
})
export class MotdepasseoublierComponent implements OnInit {

  constructor(private connexionService:ConnexionService, private route:Router) { }
modId:any
data:any
  ngOnInit(): void {
  }

 
  oublier(detailId){
    
this.data=detailId.value.email
console.log(this.data)
    this.data={data:this.data}
    /*this.connexionService.oublier(this.data).subscribe((resultat)=>{
      this.route.navigate(['connexion/']);
    })*/
  }  
  
}
