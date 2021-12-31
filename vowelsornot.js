var input = prompt("Enter a character:");
if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
alert("Its a vowel");
} else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
  alert("Its a consonant");
} else {
  alert("Invalid input please enter an alphabet");
 }