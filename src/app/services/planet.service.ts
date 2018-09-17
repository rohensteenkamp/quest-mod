import { Injectable } from '@angular/core';
import { Planet, PlanetData } from '../models/planet';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets$: Observable<any[]>;
  planetCollection: AngularFirestoreCollection<Planet>;

  collectionRef: AngularFirestoreCollection<Planet>;

constructor(db: AngularFirestore) {
  this.planetCollection = db.collection<Planet>("planets");
  this.planets$ = db.collection("planets").snapshotChanges().pipe(
    map(actions => {
      return actions.map(action => new Planet(action.payload.doc.id, action.payload.doc.data() as PlanetData));
    })
  );
 }

  addPlanet(planet: Planet) {
    this.planetCollection.add(planet);
  }

  removePlanet(planet: Planet) {
    

    this.planetCollection.doc(planet.key).delete();
  }

  editPlanet(planet: Planet) {
    
    this.planetCollection.doc(planet.key).update(planet);
  }
}

