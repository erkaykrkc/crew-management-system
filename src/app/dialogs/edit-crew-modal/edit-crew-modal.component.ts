import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Crew } from '../../models/crew.model';
import { CertificateTypeService } from '../../services/certificate-type.service';

@Component({
  selector: 'app-edit-crew-modal',
  templateUrl: './edit-crew-modal.component.html',
  styleUrls: ['./edit-crew-modal.component.scss']
})
export class EditCrewModalComponent implements OnInit {

  editCrewForm: FormGroup = new FormGroup({});

  nationalities: string[] = [];
  titles: string[] = [];
  certificateTypes: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditCrewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Crew,
    private certificateTypeService: CertificateTypeService
  ) {
    this.editCrewForm = new FormGroup({
      firstName: new FormControl(this.data.firstName, Validators.required),
      lastName: new FormControl(this.data.lastName, Validators.required),
      title: new FormControl(this.data.title, Validators.required),
      nationality: new FormControl(this.data.nationality, Validators.required),
      currency: new FormControl(this.data.currency, Validators.required),
      dailyRate: new FormControl(this.data.dailyRate, [Validators.required, Validators.min(0)]),
      daysOnBoard: new FormControl(this.data.daysOnBoard, [Validators.required, Validators.min(1)]),
      certificates: new FormArray(this.data.certificates.map(cert => this.createCertificateGroup(cert)))
    });
  }

  ngOnInit() {
    this.nationalities = this.getNationalities();
    this.titles = this.getTitles();
    this.certificateTypes = this.certificateTypeService.getCertificateTypes();
  }

  getNationalities(): string[] {
    return ['USA', 'Canada', 'UK', 'Germany', 'France', 'Brazil', 'Russia', 'Japan', 'Australia', 'India', 'Turkey', 'Spain'];
  }

  getTitles(): string[] {
    return ['Captain', 'First Officer', 'Chief Engineer', 'Second Officer', 'Third Officer', 'Bosun', 'Deckhand', 'Chief Steward', 'Second Engineer', 'Radio Operator'];
  }

  get certificatesArray(): FormArray {
    return this.editCrewForm.get('certificates') as FormArray;
  }

  createCertificateGroup(cert: any): FormGroup {
    return new FormGroup({
      type: new FormControl(cert.type, Validators.required),
      issueDate: new FormControl(cert.issueDate, Validators.required),
      expiryDate: new FormControl(cert.expiryDate, Validators.required)
    });
  }


  addCertificate(): void {
    (this.editCrewForm.get('certificates') as FormArray).push(
      this.createCertificateGroup({ type: '', issueDate: '', expiryDate: '' })
    );
  }


  removeCertificate(index: number): void {
    (this.editCrewForm.get('certificates') as FormArray).removeAt(index);
  }

  get certificates() {
    return this.editCrewForm.get('certificates') as FormArray;
  }


  onCancel(): void {
    this.dialogRef.close();
  }


  onSave(): void {
    console.log('editCrewForm', this.editCrewForm.value);
    if (this.editCrewForm.valid) {
      this.dialogRef.close(this.editCrewForm.value);
    }
  }
}
