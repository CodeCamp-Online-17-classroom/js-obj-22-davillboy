// write code here
function Accumulator(startingValue) {
            this.currentValue = startingValue;
          
            this.read = function() {
              let input = +prompt('Enter a number to add:', 0);
              this.currentValue += input;
            };
          
            this.show = function() {
              alert('Current Value: ' + this.currentValue);
            };
          }
          
          let accumulator = new Accumulator(5); // กำหนด starting value เป็น 5
          accumulator.read(); 
          accumulator.read(); 
          accumulator.show(); 
