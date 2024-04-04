import { Injectable } from '@angular/core';
import { Cube, Cylinder } from 'src/app/models/solid.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  calculateCubeVolume(length: number): number {
    const cube = new Cube('Куб', length);
    return cube.calculateVolume();
  }

  calculateCubeSurfaceArea(length: number): number {
    const cube = new Cube('Куб', length);
    return cube.calculateSurfaceArea();
  }

  calculateCylinderVolume(radius: number, height: number): number {
    const cylinder = new Cylinder('Циліндр', radius, height);
    return cylinder.calculateVolume();
  }

  calculateCylinderSurfaceArea(radius: number, height: number): number {
    const cylinder = new Cylinder('Циліндр', radius, height);
    return cylinder.calculateSurfaceArea();
  }
}