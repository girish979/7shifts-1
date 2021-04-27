const Add = require("./index");

test("Q1 : Returns 0 for empty string", () => {
  expect(Add("")).toBe(0);
});

test("Q1 : Returns 8 for string '1,2,5'", () => {
  expect(Add("1,2,5")).toBe(8);
});

test("Q2 : Returns 6 for string '1\\n,2,3'", () => {
  expect(Add("1\n,2,3")).toBe(6);
});

test("Q2 : Returns 7 for string '1,\\n2,4'", () => {
  expect(Add("1,\n2,4")).toBe(7);
});

test("Q3 : Returns 6 for string '//$\\n1$2$3'", () => {
  expect(Add("//$\n1$2$3")).toBe(6);
});

test("Q3 : Returns 13 for string '//@\\n2@3@8'", () => {
  expect(Add("//@\n2@3@8")).toBe(13);
});

// test("Q4 : Returns exception for string '//@\\n-2@3@8'", () => {
//   expect(() => {
//     Add("//@\n-2@3@8");
//   }).toThrow("Negatives");
// });


test("Q4 : Returns exception for string '//@\\n-2@3@8'", () => {
    expect( Add("//@\n-2@3@8")).toThrow();
  });

test("Bonus 1: Returns 2 for 2,1001", () => {
  expect(Add("2,1001")).toBe(2);
});

test("Bonus 2: Returns 2 for '//***\\n1***2***3'", () => {
  expect(Add("//***\n1***2***3")).toBe(6);
});

test("Bonus 3: Returns 6 for //$,@\\n1$2@3", () => {
  expect(Add("//$,@\n1$2@3")).toBe(6);
});

test("Bonus 4: Returns 6 for //$$,@@@@\\n1$$3@@@@5", () => {
  expect(Add("//$$,@@@@\n1$$3@@@@5")).toBe(9);
});
