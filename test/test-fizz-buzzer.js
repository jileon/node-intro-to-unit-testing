const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function (){


  describe('if statement for fizz', function(){ 
    it('should return fizz if number is modulus 3', function(){
      const normalCases=[3,6,9,12,18];

      normalCases.forEach((input)=>{
        expect(fizzBuzzer(input)).to.equal('fizz');
      });
    });
  });


  describe('if statement for buzz', function(){ 
    it('should return fizz if number is modulus 5', function(){
      const normalCases=[5,10, 20, 25];
      normalCases.forEach((input)=>{
        expect(fizzBuzzer(input)).to.equal('buzz');
      });
    });
  });

  describe('if statement for fizz-buzz', function(){ 
    it('should return fizz if number is modulus 15', function(){
      const normalCases=[15,30, 45];
      normalCases.forEach((input)=>{
        expect(fizzBuzzer(input)).to.equal('fizz-buzz');
      });
    });
  });


  describe('if statement for num not % 3,5, or 15', function(){ 
    it('should return number given as parameter', function(){
      const normalCases=[1,2,4,7];
      normalCases.forEach((input)=>{
        expect(fizzBuzzer(input)).to.equal(input);
      });
    });
  });

  describe('if statement for num not % 3,5, or 15', function(){ 
    it('should return number given as parameter', function(){
      const normalCases=[1,2,4,7];
      normalCases.forEach((input)=>{
        expect(fizzBuzzer(input)).to.equal(input);
      });
    });
  });

  describe('if statement for NaN', function(){ 
    it('should throw error for parameters that are NaN', function(){
      const badCases=['1','cow','coffee'];
      
      badCases.forEach((input)=>{
        expect( ()=>fizzBuzzer(input)).to.throw(Error);
      });
    });
  });



});