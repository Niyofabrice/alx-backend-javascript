export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  set code(code) {
    if ((code !== 'string') && !(code instanceof String)) {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if ((name !== 'string') && !(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }
}
