import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets$: Observable<any[]>;

constructor(db: AngularFirestore) {
  this.planets$ = db.collection("planets").valueChanges();
 }

  getPlanets(): Planet[] {
    return null;
  }

  // selectPlanet(planet: Planet) {
  //    this.selectedPlanet.next(planet);
  // }

  // addPlanet(planet: Planet) {
  //  if(planet.name && planet.description) {
  //    this.planets.push(planet);
  //   }
  // }

  // removePlanet(planet: Planet) {
  //   const index: number = this.planets.indexOf(planet);
  //   this.planets.splice(index,1);    
  // }

}
