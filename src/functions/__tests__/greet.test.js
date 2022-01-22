const greet = require("../greet")

test("greet('Bob') produces 'Hello, Bob.'", () => {
    expect(greet("Bob")).toBe('Hello, Bob.')
})

test("greet(null) produces 'Hello, my friend.'", () => {
    expect(greet(null)).toBe('Hello, my friend.')
})