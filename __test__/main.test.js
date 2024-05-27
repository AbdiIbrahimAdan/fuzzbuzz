const { divisibilityTest} = require("../main")

describe("divisibility  5 only",()=>{
  it("number is divisible by both 3 and 5",()=>{
    expect(divisibilityTest(20)).toBe(`20 buzz`)
  })
  it("number is divisible  3  only",()=>{
    expect(divisibilityTest(9)).toBe(`9 fuzz`)
  })

  it("number is divisible by both 3 and 5",()=>{
    expect(divisibilityTest(15)).toBe(`15 fuzzbuzz`)
  })

  it("number is divisible by both 3 and 5",()=>{
    expect(divisibilityTest(20)).toBe(`20 buzz`)
  })
  it("number is not divisible by both 3 and 5",()=>{
    expect(divisibilityTest(7)).toBe(`7`)
  })



})