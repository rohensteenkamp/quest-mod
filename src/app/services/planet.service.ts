import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets$: Observable<any[]>;
  planetCollection: AngularFirestoreCollection<Planet>;
  planetDoc: AngularFirestoreDocument<Planet>;

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
    const id = planet.name;
    this.planetCollection.doc(id).set(planet);
  }

  removePlanet(planet: Planet) {
    const id = planet.name;
    this.planetCollection.doc(id).delete();
  }
}

