import { Injectable } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getDetailVehicle (): Observable<any>{
    const url = 'http://localhost:8080/api/vehiculos/1';
    return this.http.get<any>(url);

  }
}
