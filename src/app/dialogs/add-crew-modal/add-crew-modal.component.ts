import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CertificateTypeService } from '../../services/certificate-type.service';

@Component({
  selector: 'app-add-crew-modal',
  templateUrl: './add-crew-modal.component.html',
  styleUrl: './add-crew-modal.component.scss'
})
export class AddCrewModalComponent {
  addCrewForm: FormGroup;
  nationalities: string[] = [];
  titles: string[] = [];
  certificateTypes: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddCrewModalComponent>,
    private fb: FormBuilder,
    private certificateTypeService: CertificateTypeService
  ) {

    // Creating reactive forms
    this.addCrewForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      title: ['', Validators.required],
      nationality: ['', Validators.required],
      dailyRate: ['', [Validators.required, Validators.min(1)]],
      daysOnBoard: ['', [Validators.required, Validators.min(1)]],
      currency: ['', Validators.required],
      certificates: this.fb.array([])
    });
  }

  ngOnInit(): void {
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

  // Adding certificate
  addCertificate(): void {
    const certificates = this.addCrewForm.get('certificates') as FormArray;
    certificates.push(this.fb.group({
      type: [''],
      issueDate: [''],
      expiryDate: ['']
    }));
  }

  // Deleting certificate
  removeCertificate(index: number): void {
    const certificates = this.addCrewForm.get('certificates') as FormArray;
    certificates.removeAt(index);
  }

  get certificates(): FormArray {
    return this.addCrewForm.get('certificates') as FormArray;
  }

  // saving data for crew member
  onSave(): void {
    this.dialogRef.close(this.addCrewForm.value);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
