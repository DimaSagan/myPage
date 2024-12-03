import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { ButtonComponent } from '../button/button.component';
import { SquereLinkComponent } from "../squere-link/squere-link.component";
import { icon } from '../../../assets/mock-data/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconTransformPipe } from "../../pipes/icon-transform/icon-transform.pipe";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    SquereLinkComponent,
    FontAwesomeModule,
    IconTransformPipe,
    
],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent implements OnInit {

  callback!: FormGroup

  icon = icon

  ngOnInit(): void {
    this.callback = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      website: new FormControl(''),
      message: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    if (this.callback.valid) {
      emailjs.send(
        'service_9wv8oxi',
        'template_eog990n',
        this.callback.value,
        'TIKtwjBV88YunxH98'
      ).then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          this.callback.reset()
        },
        (error) => {
          console.log('FAILED...', error);
        }
      )
      
    } else {
      this.markAllFieldAsTouched()
    }
  }

  private markAllFieldAsTouched() {
    Object.keys(this.callback.controls).forEach((field) => {
      const control = this.callback.get(field)
      control?.markAsTouched()
    })
  }
}


