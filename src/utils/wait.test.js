import wait from './wait';

// Method one for async tests
test("wait for promise to resolve", (done) => {
  wait(3).then(result => {
    expect(result).toBe("hurray")
    done()
  })
})

// Method two for async tests
test("wait for promise to resolve", () => {
  return wait(3).then(result => {
    expect(result).toBe("hurray")
  })
})

// Method three for async tests
test("wait for promise to resolve", async () => {
  const result = await wait(3)
    expect(result).toBe("hurray")
})
