import { Component } from '@angular/core';
import { CrewService } from '../services/crew.service';
import { Crew } from '../models/crew.model';
import { CrewCertificatesModalComponent } from '../dialog/crew-certificates-modal/crew-certificates-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrl: './crew-list.component.scss'
})
export class CrewListComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'nationality', 'title', 'dailyRate', 'daysOnBoard', 'currency', 'certificates', 'actions'];
  crewList: Crew[] = [];
  totalIncomeSummary = [];

  constructor(private crewService: CrewService, public dialog: MatDialog) {
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
    this.dialog.open(CrewCertificatesModalComponent, {
      width: '500px',
      data: { certificates: crew.certificates }
    });
  }
}
