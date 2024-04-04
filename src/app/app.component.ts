import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculationService } from 'src/app/calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formData!: FormGroup; // Властивість для форми введення даних
  calculationResults: any[] = []; // Властивість для результатів розрахунків

  constructor(private fb: FormBuilder, private calculationService: CalculationService) {}

  ngOnInit() {
    // Ініціалізація форми введення даних за допомогою FormBuilder
    this.formData = this.fb.group({
      length: ['', Validators.required],
      width: ['', Validators.required],
      height: ['', Validators.required],
      // Додайте додаткові поля для введення даних
    });
  }

  // Метод для обробки введених даних з форми
  submitForm() {
    // Отримайте дані з форми
    const { length, width, height } = this.formData.value;

    // Викличте сервіс для розрахунку об'єму та площі поверхні фігур
    const cubeVolume = this.calculationService.calculateCubeVolume(length);
    const cubeSurfaceArea = this.calculationService.calculateCubeSurfaceArea(length);
    const cylinderVolume = this.calculationService.calculateCylinderVolume(width / 2, height);
    const cylinderSurfaceArea = this.calculationService.calculateCylinderSurfaceArea(width / 2, height);

    // Створіть об'єкти з результатами розрахунків
    const cubeResult = { name: 'Куб', volume: cubeVolume, surfaceArea: cubeSurfaceArea };
    const cylinderResult = { name: 'Циліндр', volume: cylinderVolume, surfaceArea: cylinderSurfaceArea };

    // Очистіть попередні результати перед додаванням нових
    this.calculationResults = [];

    // Додайте нові результати до масиву
    this.calculationResults.push(cubeResult, cylinderResult);
  }
}