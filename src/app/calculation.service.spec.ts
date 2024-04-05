import { TestBed } from '@angular/core/testing';
import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate the volume of a cube', () => {
    const length = 5;
    const expectedVolume = 125; // For a cube with side length 5, volume should be 5^3 = 125
    const volume = service.calculateCubeVolume(length);
    expect(volume).toEqual(expectedVolume);
  });
});