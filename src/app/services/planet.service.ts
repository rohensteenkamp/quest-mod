import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets$: Observable<any[]>;
  planetCollection: AngularFirestoreCollection<Planet>;

constructor(db: AngularFirestore) {
  this.planetCollection = db.collection<Planet>("planets");
  this.planets$ = db.collection("planets").valueChanges();
 }

  getPlanets(): Planet[] {
    return null;
  }

  // selectPlanet(planet: Planet) {
  //    this.selectedPlanet.next(planet);
  // }

  addPlanet(planet: Planet) {
   this.planetCollection.add(planet);
    }
  }

  // removePlanet(planet: Planet) {
  //   const index: number = this.planets.indexOf(planet);
  //   this.planets.splice(index,1);    
  // }

