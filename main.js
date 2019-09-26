var count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {
    count = count;
  } else if (card == 10 || card == "J"  || card == "Q"  || card == "K"  || card == "A") {
    count--;
  }

  var decision = "";

  if (count > 0) {
    decision = "Bet";
  } else {
    decision = "Hold";
  }
  return count + " " + decision;
  // Only change code above this line
}


alert(cc(prompt('первая карта',"")));
alert(cc(prompt('вторая карта',"")));
alert(cc(prompt('третья карта',"")));
alert(cc(prompt('четвертая карта',"")));
alert(cc(prompt('пятая карта',"")));
