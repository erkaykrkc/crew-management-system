import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Crew } from '../../models/crew.model';

@Component({
  selector: 'app-edit-crew-modal',
  templateUrl: './edit-crew-modal.component.html',
  styleUrls: ['./edit-crew-modal.component.scss']
})
export class EditCrewModalComponent implements OnInit {

  editCrewForm: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<EditCrewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Crew
  ) { }

  ngOnInit() {
    // Formu başlatıyoruz
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
