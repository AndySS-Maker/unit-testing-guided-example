const  { multiply }  =  require ( './../calculator.js' ) ;

describe ( 'Multiply' ,  ( )  =>  { 
    test("should multiply two positive integers correctly", () => {
        const result = multiply(1, 2);
        expect(result).toBe(2);
      });

      test("should multiply two numbers, a negative and a positive integer. The value returned should be a negative number.", () => {
        const result = multiply(- 4, 3);
        expect(result).toBe(-12);
      });

      test("should multiply any number and a number 0. The value returned should be 0", () => {
        const result = multiply(2 , 0);
        expect(result).toBe(0);
      });

  } ) ;

  
    
  
    
  
  