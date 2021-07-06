import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Passenger } from "./models/passenger.model";

const API_URL = 'http://localhost:3000/passengers';

@Injectable({
  providedIn: 'root'
})

export class PassengerDashboardService {

  constructor(private readonly http: HttpClient) { }

  public getPassenger(id: number): Observable<Passenger> {
    return this.http.get<Passenger>(`${API_URL}/${id}`);
  }

  public getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(API_URL);
  }

  public updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(`${API_URL}/${passenger.id}`, passenger);
  }

  public removePassenger(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
