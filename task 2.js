let nominator, denominator;
nominator = prompt("Enter a nominator: ");
denominator = prompt("Enter a denominator: ");
fraction.addition(nominator, denominator);
fraction.subtruction(nominator, denominator);
fraction.division(nominator, denominator);
fraction.product(nominator, denominator);


let fraction = {
    nominator: 2,
    denominator: 3,
    addition: function(nominator, denominator) {
      let sum = this.nominator / this.denominator + nominator / denominator;
      alert("Sum of fractions is " + sum);
    },
    subtruction: function(nominator, denominator) {
      let subtr = this.nominator / this.denominator - nominator / denominator;
      alert(" Subtruction is: " + subtr);
    },
    product: function(nominator, denominator) {
      let product_ =
        (this.nominator / this.denominator) * (nominator / denominator);
      alert("Product is " + product_);
    },
    division: function(nominator, denominator) {
      let div = this.nominator / this.denominator / (nominator / denominator);
      alert("Division of these fractions is " + div);
    }
  };
  
