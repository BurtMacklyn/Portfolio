import { GameConfig } from './Config';

export class Dimensions {
  static RELATIVE_UNIT_SIZE = 40;

  private width!: number;
  private widthUnit!: number;
  private widthTotal!: number;
  private height!: number;
  private heightUnit!: number;
  private heightTotal!: number;

  private parent?: HTMLElement;

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

  constructor(config: GameConfig) {
    this.parent = config.parent;
    this.refresh(config);
    this.listen(() => this.refresh(config));
  }

  private refresh(cfg: GameConfig) {
    this.height = Math.round(
      (this.parent ? this.parent.clientHeight : window.innerHeight) / cfg.size,
    );
    this.width = Math.round(
      (this.parent ? this.parent.clientWidth : window.innerWidth) / cfg.size,
    );
    this.heightUnit = cfg.size;
    this.widthUnit = cfg.size;
    this.heightTotal = this.height * this.heightUnit;
    this.widthTotal = this.width * this.widthUnit;
  }

  private listen(f: () => void) {
    window.addEventListener('resize', f);

    return () => window.removeEventListener('resize', f);
  }
}
