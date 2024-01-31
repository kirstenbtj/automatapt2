const textField = document.getElementById("email-field");
const outputMessage = document.getElementById("output-message");

const VALID_EMAIL_STRING = "VALID EMAIL";

let ab = new AutomataBuilder();
let afd = new AFD(
  ab.alphabet,
  ab.states[0],
  ab.states[0],
  ab.transitions,
  ab.states
);

function onVerificarClick() {
  afd.char = "";
  if (!textField.value) {
    INVALID_EMAIL_STRING = "EMAIL"
    invalidEmail();
  } else {
    const validationResult = afd.validateString(textField.value);
    if (validationResult.isValid) {
      validEmail();
    } else {
      const invalidChar = validationResult.invalidChar;
      const lastValidTransitionLabel = validationResult.lastValidTransitionLabel;

      console.log("Last Valid Transition Label:", lastValidTransitionLabel);

      if (/[A-Z]/.test(invalidChar)) {
        INVALID_EMAIL_STRING = `Invalid Uppercase Letter: ${invalidChar}`;
      } else if (invalidChar != null) {
        INVALID_EMAIL_STRING = `Invalid character: ${invalidChar}`;
      } else if (lastValidTransitionLabel != "") {
        const expectedChar = getExpectedCharacter(lastValidTransitionLabel);
        INVALID_EMAIL_STRING = `Incomplete Email Expected character: ${expectedChar}`;
      } else {
        INVALID_EMAIL_STRING = `Invalid Email`;
      }

      invalidEmail(INVALID_EMAIL_STRING);
    }
  }
}

function getExpectedCharacter(transitionLabel) {
  // Implement logic to determine the expected character based on the transition label
  if (transitionLabel === "transition22") {
    return "@";
  }
  if (transitionLabel === "transition44") {
    return "'.'";
  }

}




function invalidEmail() {
  outputMessage.innerHTML = INVALID_EMAIL_STRING;
  outputMessage.style.color = "#cf3232";
  outputMessage.style.display = "block";
}

function validEmail() {
  outputMessage.innerHTML = VALID_EMAIL_STRING;
  outputMessage.style.display = "block";
  outputMessage.style.color = "#349c22";
}

function hideOutput() {
  outputMessage.style.display = "none";
}
