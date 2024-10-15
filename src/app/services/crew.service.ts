import { Injectable } from '@angular/core';
import { Crew } from '../models/crew.model';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  private crewList: Crew[] = [
    {
      firstName: 'John', lastName: 'Doe', nationality: 'USA',
      title: 'Captain', dailyRate: 100, daysOnBoard: 2, currency: 'USD'
    },
    {
      firstName: 'Jane', lastName: 'Smith', nationality: 'UK',
      title: 'Engineer', dailyRate: 80, daysOnBoard: 2, currency: 'GBP'
    },
  ];

  constructor() { }

  getCrewList(): Crew[] {
    return this.crewList;
  }

  addCrew(crew: Crew) {
    this.crewList.push(crew);
  }

  deleteCrew(index: number) {
    this.crewList.splice(index, 1);
  }
}
