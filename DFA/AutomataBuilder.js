class AutomataBuilder {
  lowerCaseCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];



  digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  specialCharacters = ["-", "_", "."];

  at = ["@"];

  dot = ["."];

  alphabet = this.lowerCaseCharacters.concat(
    this.digits,
    this.specialCharacters,
    this.at,
    this.dot
  );

  node1 = new AFDNode(
    "q1",
    true,
    false,
    [],
  );
  node2 = new AFDNode(
    "q2",
    false,
    false,
    [],
  );
  node3 = new AFDNode(
    "q3",
    false,
    false,
    [],
  );
  node4 = new AFDNode(
    "q4",
    false,
    false,
    [],
  );
  node5 = new AFDNode(
    "q5",
    false,
    false,
    [],
  );
  node6 = new AFDNode(
    "q6",
    false,
    true,
    [],
  );

  transition12 = new AFDTransition(
    this.node1,
    this.node2,
    this.lowerCaseCharacters,
    "transition12"
  );
  transition22 = new AFDTransition(
    this.node2,
    this.node2,
    this.lowerCaseCharacters.concat(this.digits, this.specialCharacters),
    "transition22"
  );
  transition23 = new AFDTransition(
    this.node2,
    this.node3,
    this.at,
    "transition23"
  );
  transition34 = new AFDTransition(
    this.node3,
    this.node4,
    this.lowerCaseCharacters,
    "transition34"
  );
  transition44 = new AFDTransition(
    this.node4,
    this.node4,
    this.lowerCaseCharacters,
    "transition44"
  );
  transition45 = new AFDTransition(
    this.node4,
    this.node5,
    this.dot,
    "transition45"
  );
  transition56 = new AFDTransition(
    this.node5,
    this.node6,
    this.lowerCaseCharacters,
    "transition56"
  );
  transition66 = new AFDTransition(
    this.node6,
    this.node6,
    this.lowerCaseCharacters,
    "transition66"
  );

  constructor() {
    
    this._states = [
      this.node1,
      this.node2,
      this.node3,
      this.node4,
      this.node5,
      this.node6,
    ];

    this._transitions = [
      this.transition12,
      this.transition22,
      this.transition23,
      this.transition34,
      this.transition44,
      this.transition45,
      this.transition56,
      this.transition66,
    ];

    this.mapTransitions();
  }

  get states() {
    return this._states;
  }

  get transitions() {
    return this._transitions;
  }
  

  mapTransitions() {
    this.node1.transitions = [this.transitions[0]];
    this.node2.transitions = [this.transitions[1], this.transitions[2]];
    this.node3.transitions = [this.transitions[3]];
    this.node4.transitions = [this.transitions[4], this.transitions[5]];
    this.node5.transitions = [this.transitions[6]];
    this.node6.transitions = [this.transitions[7]];
  }

  getLastValidTransition() {
    return this._transitions.find(transition => transition.toNode === this._currentState);
  }
  
}
