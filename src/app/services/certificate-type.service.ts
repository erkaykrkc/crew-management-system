import { Injectable } from '@angular/core';
import { CertificateType } from '../models/certificate-type.model';
import { CERTIFICATE_TYPES } from '../example-data/example-certificate-type-data';

@Injectable({
    providedIn: 'root'
})
export class CertificateTypeService {
    private certificateTypes: CertificateType[] = CERTIFICATE_TYPES;

    constructor() {
    }

    getCertificateTypes(): CertificateType[] {
        return this.certificateTypes;
    }

    addCertificateType(certificateType: CertificateType): void {
        this.certificateTypes.push(certificateType);
    }
}
