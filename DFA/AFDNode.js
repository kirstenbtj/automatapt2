class AFDNode {

  constructor(
    name,
    isInitial,
    isFinal,
    transitions,
  ) {
    this._isActive = false;
    this._name = name;
    this._isInitial = isInitial;
    this._isFinal = isFinal;
    this._transitions = transitions;
  }

  set isActive(bool) {
    this._isActive = bool;
  }

  get name() {
    return this._name;
  }

  get isInitial() {
    return this._isInitial;
  }

  get isFinal() {
    return this._isFinal;
  }

  get transitions() {
    return this._transitions;
  }
  
  set transitions(transitions) {
    this._transitions = transitions;
  }
  
}
