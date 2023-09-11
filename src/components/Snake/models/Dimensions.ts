export class Dimensions {
  static RELATIVE_UNIT_SIZE = 40;

  private width!: number;
  private widthUnit!: number;
  private widthTotal!: number;
  private height!: number;
  private heightUnit!: number;
  private heightTotal!: number;

  public get state() {
    return {
      width: this.width,
      widthUnit: this.widthUnit,
      widthTotal: this.widthTotal,
      height: this.height,
      heightUnit: this.heightUnit,
      heightTotal: this.heightTotal,
    };
  }

  constructor(private parent?: HTMLElement) {
    this.refresh();
    this.listen(() => this.refresh());
  }

  private refresh() {
    this.height = Math.round(
      (this.parent ? this.parent.clientHeight : window.innerHeight) /
        Dimensions.RELATIVE_UNIT_SIZE,
    );
    this.width = Math.round(
      (this.parent ? this.parent.clientWidth : window.innerWidth) /
        Dimensions.RELATIVE_UNIT_SIZE,
    );
    this.heightUnit = Dimensions.RELATIVE_UNIT_SIZE;
    this.widthUnit = Dimensions.RELATIVE_UNIT_SIZE;
    this.heightTotal = this.height * this.heightUnit;
    this.widthTotal = this.width * this.widthUnit;
  }

  private listen(f: () => void) {
    window.addEventListener('resize', f);

    return () => window.removeEventListener('resize', f);
  }
}
