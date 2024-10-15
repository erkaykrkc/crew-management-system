import { Component } from '@angular/core';
import { CrewService } from '../services/crew.service';
import { Crew } from '../models/crew.model';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrl: './crew-list.component.scss'
})
export class CrewListComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'nationality', 'title', 'dailyRate', 'daysOnBoard', 'currency', 'certificates', 'actions'];
  crewList: Crew[] = [];
  totalIncomeSummary = [];

  constructor(private crewService: CrewService) {
    this.crewList = this.crewService.getCrewList();
  }

  editCrew(crew: Crew) {

  }

  deleteCrew(crew: Crew) {
    const index = this.crewList.indexOf(crew);
    if (index > -1) {
      this.crewService.deleteCrew(index);
      this.crewList = this.crewService.getCrewList();
    }
  }

  viewCertificateModal(crew: Crew) {
    // 
  }
}
