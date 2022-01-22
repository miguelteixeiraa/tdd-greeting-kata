const commahandler = require("../commahandler")

test("commahandler(['Bob', 'Charlie, Dianne']) produces ['Bob', 'Charlie', 'Dianne']", () => {
    expect(commahandler(['Bob', 'Charlie, Dianne'])).toMatchObject(['Bob', 'Charlie', 'Dianne'])
})

test("commahandler(null) produces null", () => {
    expect(commahandler(null)).toBe(null)
})