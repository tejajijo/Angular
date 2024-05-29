import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
// input allows the component to share data . The direction is from parent to child components
// @Input() helps to customise the data displayed in the component
  @Input()

  // created variable named housingLocation of tyope HousingLocation. 
  // ! is used to tell typescript compiler that the value of the variable will not be null or undefined.
  housingLocation!: Housinglocation;

}
