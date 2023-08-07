
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 1000,years: 1,rate:10})).toEqual('87.92');
});

it('should return a result with 2 decimal places', function() {
  expect(calculateMonthlyPayment({amount: 500000,years: 10,rate:2.9})).toEqual('4804.99');
});

it('should handle decimal term years', function() {
  expect(calculateMonthlyPayment({amount: 1000,years: .5,rate:10})).toEqual('171.56');
});

it('should handle 0% rate', function() {
  expect(calculateMonthlyPayment({amount: 12000,years: 1,rate:0})).toEqual(1000);
});

it('should handle 0 term years', function() {
  expect(calculateMonthlyPayment({amount: 8888.88,years: 0,rate:8.8})).toEqual("The value for term in years must be > 0");
});

it('should not process negative "-" term years', function() {
  expect(calculateMonthlyPayment({amount: 7777.77 ,years: -7,rate:7.7})).toEqual("The value for term in years must be > 0");
});
