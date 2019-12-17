import { Injectable } from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
get places() {
  return [...this._places];
}
  constructor() { }
// tslint:disable-next-line: variable-name
private _places: Place[] = [

// tslint:disable-next-line: max-line-length
new Place('p1', 'Manhattan Mansion', 'In the heart of New York City.', 'https://media-cdn.tripadvisor.com/media/photo-s/06/5f/48/13/manhattan-beach-house.jpg', 185.65),
// tslint:disable-next-line: max-line-length
new Place('p2', 'Amour Toujours', 'A Romantic place in Paris.', 'https://i5.walmartimages.com/asr/39192639-09a9-47a5-a042-b4500acab60a_1.555db399f3f77fee8679540932bb0e42.jpeg?odnBg=FFFFFF', 99.99),

// tslint:disable-next-line: max-line-length
new Place('p3', 'The Foggy Palace', 'Not your average city trip.', 'https://previews.123rf.com/images/andrascsontos/andrascsontos1609/andrascsontos160900120/63752595-foggy-old-stairway-of-a-palace.jpg', 120.00),


];
  find(): Place {
    throw new Error('Method not implemented.');
  }
  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
