class MQStateController {
  private _state = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xxl: false,
    touchscreen: false,
  };

  get state() {
    return this._state;
  }

  set state(s: typeof this._state) {
    this._state = s;
  }
}

export const mqController = new MQStateController();

export const useMQ = jest.fn(() => mqController.state);
