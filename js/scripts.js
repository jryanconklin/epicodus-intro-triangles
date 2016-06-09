// Front-End Logic






// Back-End Logic

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("#input1").val());
    var side2 = parseInt($("#input2").val());
    var side3 = parseInt($("#input3").val());

    if ( side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2 ) {
      alert("This is Not a Triangle. :(");
    } else if (side1 === side2 && side2 === side3 ) {
      alert("Equilateral");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      alert("Isosceles");
    } else if (side1 !== side2 && side2 !== side3) {
      alert("Scalene");
    }


    event.preventDefault();
  });
});
