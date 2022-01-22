const isuppercase = require("../isuppercase")

test("isuppercase('JERRY') produces true", () => {
    expect(isuppercase('JERRY')).toBe(true)
})

test("isuppercase(null) produces false", () => {
    expect(isuppercase(null)).toBe(false)
})

test("isuppercase(JeRRY) produces false", () => {
    expect(isuppercase('JeRRY')).toBe(false)
})