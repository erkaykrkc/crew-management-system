import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CertificateTypeService } from '../services/certificate-type.service';
import { CertificateType } from './../models/certificate-type.model';

@Component({
  selector: 'app-certificate-type-create',
  templateUrl: './certificate-type-create.component.html',
  styleUrl: './certificate-type-create.component.scss'
})
export class CertificateTypeCreateComponent {
  certificateTypeForm: FormGroup;
  certificateTypeList: CertificateType[] = [];
  displayedColumns: string[] = ['name', 'description'];

  constructor(
    private fb: FormBuilder,
    private certificateTypeService: CertificateTypeService
  ) {
    this.certificateTypeForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.certificateTypeList = this.certificateTypeService.getCertificateTypes();
  }

  onSubmit(): void {
    if (this.certificateTypeForm.valid) {
      this.certificateTypeService.addCertificateType(this.certificateTypeForm.value);
      this.certificateTypeForm.reset();
    }
  }
}
