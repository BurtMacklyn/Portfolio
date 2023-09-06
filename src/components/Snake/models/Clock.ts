export class Clock {
  public active: boolean = true;

  static wait(ms: number) {
    return new Promise<void>(resolve => setTimeout(() => resolve(), ms));
  }

  constructor(private tick: () => Promise<void> = async () => {}, private rate: number) {}

  public async start() {
    if (!this.active) return;
    await Promise.all([this.tick(), Clock.wait(this.rate)]);
    this.start();
  }

  public stop() {
    this.active = false;
  }
}
