import * as tslib_1 from "tslib";
import { Component, HostListener, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SuccessDialogComponent } from '../contact-page/success-dialog/success-dialog.component';
let ContactPageComponent = class ContactPageComponent {
    constructor(_connectionService, dialog) {
        this._connectionService = _connectionService;
        this.dialog = dialog;
        this.faMapMarkerAlt = faMapMarkerAlt;
        this.faPhoneAlt = faPhoneAlt;
        this.faEnvelope = faEnvelope;
        this.disabledSubmitButton = true;
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.nameFormControl = new FormControl('', [Validators.required]);
        this.userMessage = new FormControl('', [Validators.required]);
        this.contactForm = new FormGroup({
            emailFormControl: this.emailFormControl,
            nameFormControl: this.nameFormControl,
            userMessage: this.userMessage,
        });
    }
    oninput() {
        if (this.contactForm.valid) {
            this.disabledSubmitButton = false;
        }
    }
    getEmailErrorMessage() {
        return this.emailFormControl.hasError('required') ? 'You must enter a value' :
            this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
    }
    onSubmit() {
        this._connectionService.sendMessage(this.contactForm.value)
            .subscribe(() => {
            let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
            this.contactForm.markAllAsTouched();
            setTimeout(() => this.formGroupDirective.resetForm(), 0);
            this.disabledSubmitButton = true;
        }, error => {
            console.log('email Error' + error);
        });
    }
    ngOnInit() {
        this.dialogConfig = {
            height: '200px',
            width: '400px',
            disableClose: false,
            data: {
                'Name': this.nameFormControl.value
            }
        };
    }
};
tslib_1.__decorate([
    ViewChild('autosize', { static: false })
], ContactPageComponent.prototype, "txtAreaAutosize", void 0);
tslib_1.__decorate([
    ViewChild('formDir', { static: false })
], ContactPageComponent.prototype, "formGroupDirective", void 0);
tslib_1.__decorate([
    HostListener('input')
], ContactPageComponent.prototype, "oninput", null);
ContactPageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contact-page',
        templateUrl: './contact-page.component.html',
        styleUrls: ['./contact-page.component.scss']
    })
], ContactPageComponent);
export { ContactPageComponent };
//# sourceMappingURL=contact-page.component.js.map