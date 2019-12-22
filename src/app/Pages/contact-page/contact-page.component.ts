import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ConnectionServiceService } from  '../../ServiceFiles/connection-service.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../contact-page/success-dialog/success-dialog.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  disabledSubmitButton: boolean = true;
  contactPageBannerImage: string = "../../../assets/office.png";
  contactBannerHeaderText: string = "Have any inquiry on Waghbakri Products?";
  contactBannerSubText: string = "You can connect us by email or phone number listed on this page.";
 // homePageBannerBtnText: string = "View Products"

  private dialogConfig;


  @ViewChild('autosize', { static: false })
  txtAreaAutosize: CdkTextareaAutosize;

  @ViewChild('formDir', { static: false })
  formGroupDirective: FormGroupDirective;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [Validators.required]);
  userMessage = new FormControl('', [Validators.required]);

  contactForm: FormGroup = new FormGroup({
    emailFormControl: this.emailFormControl,
    nameFormControl: this.nameFormControl,
    userMessage: this.userMessage,
  });

  @HostListener('input') oninput() {
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
        .subscribe( () => {
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
        'Name' : this.nameFormControl.value

      }
    }
  }

  constructor(private _connectionService: ConnectionServiceService, private dialog: MatDialog) {

  }


}
