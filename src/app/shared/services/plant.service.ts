import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionStrings } from 'src/app/Globals';

import { Plant } from '../models/Plant';
import { Result } from '../models/Result';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private httpClient: HttpClient) { }

  getPlant(id: number): Observable<Plant> {
    return this.httpClient.get<Plant>(ConnectionStrings.apiUrl + "Plants/" + id);
  }

  getPlantResult(id: number): Observable<Result> {
    return this.httpClient.get<Result>(ConnectionStrings.apiUrl + "Plants/" + id + "/result");
  }

  putPlant(plant: Plant): void {
    this.httpClient.put(ConnectionStrings.apiUrl + "Plants/"+plant.id, plant);
  }

  postPlant(plant: Plant): Observable<Plant> {
    return this.httpClient.post<Plant>(ConnectionStrings.apiUrl + "Plants", plant);
  }

  patchImage(plant: Plant, image: FormData): Observable<Plant> {
    return this.httpClient.patch<Plant>(ConnectionStrings.apiUrl + "Plants/" + plant.id + "/image", image);
  }
}
