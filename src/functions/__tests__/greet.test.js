const greet = require("../greet")

test("greet('Bob') produces 'Hello, Bob.'", () => {
    expect(greet("Bob")).toBe('Hello, Bob.')
})