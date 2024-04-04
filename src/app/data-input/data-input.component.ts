import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculationService } from 'src/app/calculation.service';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss']
})
export class DataInputComponent implements OnInit {
  formData!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private calculationService: CalculationService
  ) { }

  ngOnInit() {
    this.formData = this.fb.group({
      length: ['', Validators.required],
      width: ['', Validators.required],
      height: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.formData.valid) {
      const length = this.formData.get('length')?.value;
      const width = this.formData.get('width')?.value;
      const height = this.formData.get('height')?.value;

      const cubeVolume = this.calculationService.calculateCubeVolume(length);
      const cubeSurfaceArea = this.calculationService.calculateCubeSurfaceArea(length);

      const cylinderVolume = this.calculationService.calculateCylinderVolume(width / 2, height);
      const cylinderSurfaceArea = this.calculationService.calculateCylinderSurfaceArea(width / 2, height);
    } else {
      console.log('Форма недійсна. Будь ласка, заповніть всі обов\'язкові поля.');
    }
  }
}