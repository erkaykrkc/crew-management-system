import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Crew } from '../../models/crew.model';

@Component({
  selector: 'app-crew-card-modal',
  templateUrl: './crew-card-modal.component.html',
  styleUrl: './crew-card-modal.component.scss'
})
export class CrewCardModalComponent {
  crewData: Crew;

  constructor(public dialogRef: MatDialogRef<CrewCardModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Crew) {
    this.crewData = data;
  }

  getTotalIncome(crew: Crew): number {
    return crew.dailyRate * crew.daysOnBoard;
  }
}
