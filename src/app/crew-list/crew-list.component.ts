import { Component } from '@angular/core';
import { CrewService } from '../services/crew.service';
import { Crew } from '../models/crew.model';
import { CrewCertificatesModalComponent } from '../dialogs/crew-certificates-modal/crew-certificates-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { EditCrewModalComponent } from '../dialogs/edit-crew-modal/edit-crew-modal.component';
import { AddCrewModalComponent } from '../dialogs/add-crew-modal/add-crew-modal.component';
import { CrewCardModalComponent } from '../dialogs/crew-card-modal/crew-card-modal.component';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrl: './crew-list.component.scss'
})
export class CrewListComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'nationality', 'title', 'dailyRate', 'daysOnBoard', 'currency', 'totalIncome', 'certificates', 'actions'];
  crewList: Crew[] = [];

  constructor(private crewService: CrewService, public dialog: MatDialog) {
    this.crewList = this.crewService.getCrewList();
  }

  // Adding Crew Member
  addCrew(): void {
    const dialogRef = this.dialog.open(AddCrewModalComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.crewService.addCrew(data);
        this.crewList = [...this.crewService.getCrewList()];
      }
    });
  }

  // Update crew method
  editCrew(crew: Crew, crewIndex: number): void {
    const dialogRef = this.dialog.open(EditCrewModalComponent, {
      width: '600px',
      data: { ...crew }
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log('result', data)
      if (data) {
        this.crewService.editCrew(data, crewIndex);
        this.crewList = this.crewService.getCrewList();
      }
    });
  }

  // Delete crew method
  deleteCrew(crew: Crew) {
    const index = this.crewList.indexOf(crew);
    if (index > -1) {
      this.crewService.deleteCrew(index);
      this.crewList = this.crewService.getCrewList();
    }
  }

  // Show certificate 
  viewCertificateModal(crew: Crew) {
    this.dialog.open(CrewCertificatesModalComponent, {
      width: '500px',
      data: { certificates: crew.certificates }
    });
  }

  // calculate total income
  getTotalIncome(crewMember: Crew): number {
    return crewMember.dailyRate * crewMember.daysOnBoard;
  }

  // calculate all total income
  getTotalIncomeByCurrency(currency: string): number {
    let totalIncome = 0;

    const filteredCrew = this.crewList.filter(crew => crew.currency === currency);

    filteredCrew.forEach(crew => {
      totalIncome += this.getTotalIncome(crew);
    });

    return totalIncome;
  }

  // Crew Card Page
  viewCrewDetails(crew: Crew) {
    this.dialog.open(CrewCardModalComponent, {
      width: '600px',
      data: crew
    });
  }
}
