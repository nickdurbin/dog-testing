import wait from './wait';

// Method one for async tests
// test("wait for promise to resolve", (done) => {
//   wait(1).then(result => {
//     expect(result).toBe("hurray")
//     done()
//   })
//   .catch(err => {
//     done(err)
//   })
// })

// Method two for async tests
// test("wait for promise to resolve", () => {
//   return wait(1).then(result => {
//     expect(result).toBe("hurray")
//   })
// })

// Method three for async tests
test("wait for promise to resolve", async () => {
  const result = await wait(1)
    expect(result).toBe("hurray")
})
