// TODO: What does 'this' refer to?
// Logs in global "this".
console.log(this);

// TODO: What does 'this' refer to?
// Refers to global this.
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
// Logs the age of 10 + 10 which is 20.
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
// 5000 * 1.15 = 5750
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
