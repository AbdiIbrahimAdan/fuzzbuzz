const { divisibilityTest} = require("../main")


// divisible by both 3 and 5
describe("divisibility  3 and 5",()=>{
  it("number is divisible by both 3 and 5",()=>{
    expect(divisibilityTest(30)).toBe(`30 fuzzbuzz`)
  })
  it("number is divisible by 3 and 5",()=>{
    expect(divisibilityTest(15)).toBe(`15 fuzzbuzz`)
  })

  it("number is divisible by both 3 and 5",()=>{
    expect(divisibilityTest(60)).toBe(`60 fuzzbuzz`)
  })

  it("number is divisible by both 3 and 5",()=>{
    expect(divisibilityTest(90)).toBe(`90 fuzzbuzz`)
  }) 
})


// divisible by 3 only
describe("divisibility  by 3 only",()=>{
  it("number is divisible by 3 only ",()=>{
    expect(divisibilityTest(6)).toBe(`6 fuzz`)
  })
  it("number is divisible by 3 and 5",()=>{
    expect(divisibilityTest(12)).toBe(`12 fuzz`)
  })

  it("number is divisible by  3 only",()=>{
    expect(divisibilityTest(18)).toBe(`18 fuzz`)
  })

  it("number is divisible by both 3 and 5",()=>{
    expect(divisibilityTest(99)).toBe(`99 fuzz`)
  }) 
})

//divisible by 5 only
describe("divisibility by 5 only",()=>{
  it("number is divisible by 5 only",()=>{
    expect(divisibilityTest(20)).toBe(`20 buzz`)
  })
  it("number is divisible by 5 only",()=>{
    expect(divisibilityTest(5)).toBe(`5 buzz`)
  })

  it("number is divisible by 5 only",()=>{
    expect(divisibilityTest(25)).toBe(`25 buzz`)
  })

  it("number is divisible by 5 only",()=>{
    expect(divisibilityTest(35)).toBe(`35 buzz`)
  }) 
})




//Not divisible by 3 and 5
describe("Not Divisible by 3 and 5", () =>{
  it("number is not divisible by both 3 and 5",()=>{
    expect(divisibilityTest(7)).toBe(`7`)
  })
  it("number is not divisible by both 3 and 5",()=>{
    expect(divisibilityTest(11)).toBe(`11`)
  })
  it("number is not divisible by both 3 and 5",()=>{
    expect(divisibilityTest(19)).toBe(`19`)
  })
  it("number is not divisible by both 3 and 5",()=>{
    expect(divisibilityTest(49)).toBe(`49`)
  })
})