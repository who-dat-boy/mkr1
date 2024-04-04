export class Solid {
    constructor(public name: string) {}
  
    calculateVolume(): number {
      // Метод, який буде перевизначений в підкласах
      return 0;
    }
  
    calculateSurfaceArea(): number {
      // Метод, який буде перевизначений в підкласах
      return 0;
    }
}
  
export class Cube extends Solid {
    constructor(public override name: string, public length: number) {
      super(name);
    }
  
    override calculateVolume(): number {
      return this.length ** 3;
    }
  
    override calculateSurfaceArea(): number {
      return 6 * (this.length ** 2);
    }
}
  
export class Cylinder extends Solid {
    constructor(public override name: string, public radius: number, public height: number) {
      super(name);
    }
  
    override calculateVolume(): number {
      return Math.PI * (this.radius ** 2) * this.height;
    }
  
    override calculateSurfaceArea(): number {
      return 2 * Math.PI * this.radius * (this.radius + this.height);
    }
}  