const greet = require("../greet")

test("greet('Bob') produces 'Hello, Bob.'", () => {
    expect(greet("Bob")).toBe('Hello, Bob.')
})

test("greet(null) produces 'Hello, my friend.'", () => {
    expect(greet(null)).toBe('Hello, my friend.')
})

test("greet('BOB')) produces 'HELLO BOB!'", () => {
    expect(greet('BOB')).toBe('HELLO BOB!')
})

test("greet(['Jill', 'Jane']) produces 'Hello, Jill and Jane.'", () => {
    expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.')
})
 
test("greet(['Amy', 'Brian', 'Charlotte']) produces 'Hello, Amy, Brian, and Charlotte.'", () => {
    expect(greet(['Amy', 'Brian', 'Charlotte'])).toBe('Hello, Amy, Brian, and Charlotte.')
})

test("greet(['Amy', 'BRIAN', 'Charlotte']) produces 'Hello, Amy and Charlotte. AND HELLO BRIAN!'", () => {
    expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!')
})

test("greet(['Bob', 'Charlie, Dianne']) produces 'Hello, Bob, Charlie, and Dianne.'", () => {
    expect(greet(['Bob', 'Charlie, Dianne'])).toBe('Hello, Bob, Charlie, and Dianne.')
})