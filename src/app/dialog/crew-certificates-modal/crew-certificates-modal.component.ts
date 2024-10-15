import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crew-certificates-modal',
  templateUrl: './crew-certificates-modal.component.html',
  styleUrl: './crew-certificates-modal.component.scss'
})
export class CrewCertificatesModalComponent {

  crewCertificates = this.data.certificates;

  displayedColumns: string[] = ['certificateType', 'issueDate', 'expiryDate'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
