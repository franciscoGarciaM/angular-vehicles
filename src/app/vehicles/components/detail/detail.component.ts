import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle.interface';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit{
  vehicle1: any;
  
  constructor(private vehicleService: VehicleService){
    
  }

  ngOnInit(): void {
    console.log('Hola');
    this.vehicleService.getDetailVehicle().subscribe(
      (response: Vehicle) => this.vehicle1= response);
      console.log(this.vehicle1.modelo);

  }



  

  

}
