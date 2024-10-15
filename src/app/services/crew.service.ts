import { Injectable } from '@angular/core';
import { Crew } from '../models/crew.model';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  private crewList: Crew[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      nationality: 'USA',
      title: 'Captain',
      daysOnBoard: 120,
      dailyRate: 200,
      currency: 'USD',
      certificates: [
        { type: 'Captain License', issueDate: '2020-01-01', expiryDate: '2025-01-01' },
        { type: 'Safety Training', issueDate: '2019-06-01', expiryDate: '2024-06-01' }
      ]
    },
    {
      firstName: 'Alex',
      lastName: 'Smith',
      nationality: 'Canada',
      title: 'Engineer',
      daysOnBoard: 90,
      dailyRate: 180,
      currency: 'USD',
      certificates: [
        { type: 'Engineer License', issueDate: '2018-07-15', expiryDate: '2023-07-15' },
        { type: 'Firefighting', issueDate: '2019-01-01', expiryDate: '2024-01-01' }
      ]
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
