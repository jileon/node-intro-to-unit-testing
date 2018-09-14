const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function (){


  describe('if statement for fizz', function(){ 
    it('should return fizz if number is modulus 3', function(){
      const normalCases=[3,6,9];

      normalCases.forEach((input)=>{
        expect(fizzBuzzer(input)).to.equal('fizz');
      });
    // expect(fizzBuzzer(3)).to.equal('fizz');
    });
  });


});