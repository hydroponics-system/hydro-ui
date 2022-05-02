import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from 'projects/insite-kit/src/service/email-service/email.service';
import { ModalComponent } from '../../../modal/modal.component';

@Component({
  selector: 'ik-contact-admin-modal',
  templateUrl: './contact-admin-modal.component.html',
  styleUrls: ['./contact-admin-modal.component.scss'],
})
export class ContactAdminModalComponent implements OnInit {
  @ViewChild('contactAdminModal') modal: ModalComponent;

  form: FormGroup;
  loading = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly emailService: EmailService,
    private readonly toastService: ToastrService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      message: ['', Validators.required],
    });
  }

  sendMessage() {
    this.loading = true;
    this.emailService.sendContactAdminEmail(this.form.value.message).subscribe(
      (res) => {
        this.reset();
        this.toastService.success(
          'Email successfully sent! We will get back to you as soon as possible!'
        );
      },
      (err) => {
        this.reset();
        this.toastService.error(
          'Email could not be sent at this time! Please try again later.'
        );
      }
    );
  }

  reset() {
    this.modal.close();
    this.loading = false;
    this.form.patchValue({ message: '' });
  }
}
