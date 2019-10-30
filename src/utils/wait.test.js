import wait from './wait';

// pre-written mock from jest
jest.useFakeTimers()

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
  const spy = jest.fn()
  const waitFn = wait(1, spy)

  //fast forward in time
  jest.runAllTimers()
  const result = await waitFn

  expect(result).toBe("hurray")
  expect(spy).toHaveBeenCalledWith("hurray")
  expect(spy).toHaveBeenCalledTimes(1)
})