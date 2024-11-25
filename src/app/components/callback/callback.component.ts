import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { ButtonComponent } from '../button/button.component';
import { SquereLinkComponent } from "../squere-link/squere-link.component";
import { icon } from '../../../assets/mock-data/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconTransformPipe } from "../../pipes/icon-transform/icon-transform.pipe";
@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    SquereLinkComponent,
    FontAwesomeModule,
    IconTransformPipe
],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent implements OnInit {

  callback!: FormGroup

  icon = icon

  ngOnInit(): void {
    this.callback = new FormGroup({
      
    })
  }

  onSubmit() {
    
  }
}
