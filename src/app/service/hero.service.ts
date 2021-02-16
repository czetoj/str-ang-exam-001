import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {
      id: 1,
      name: 'Bruce Willis',
      superPower: 'Drágán adja az életét',
      address: '23 Malibu Avenue Santa Barbara California'
    },
    {
      id: 2,
      name: 'Arnold Schwarzenegger',
      superPower: 'Hasta la Vista Baby',
      address: 'Arnold street California'
    },
    {
      id: 3,
      name: 'Sylvester Stallone',
      superPower: 'Rambo',
      address: 'Rocky street San Diego California'
    },
    {
      id: 4,
      name: 'Clint Eastwood',
      superPower: 'Piszkos Harry',
      address: 'Sergio Leone street Los Angeles California'
    },
    {
      id: 5,
      name: 'Matt Damon',
      superPower: 'Bourne compatible',
      address: 'Cambridge Idaho'
    },
    {
      id: 6,
      name: 'George Clooney',
      superPower: 'Super handsome',
      address: 'Lexington Kentucky'
    },
    {
      id: 7,
      name: 'Jane Fonda',
      superPower: 'Super eco',
      address: 'Palo Alto California'
    },
    {
      id: 8,
      name: 'Cameron Diaz',
      superPower: 'Charlie\'s angel',
      address: 'San Diego California'
    },
  ]

  constructor() { }

  getAll(): Hero[] {
    return this.list;
  }

}
