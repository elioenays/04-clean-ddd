import { Either, left, right } from './either'

function doSomenthing(shouldSuccess: boolean): Either<string, string> {
  if (shouldSuccess) {
    return right('success')
  } else {
    return left('errror')
  }
}

test('success result', () => {
  const result = doSomenthing(true)

  expect(result.isRight()).toBe(true)
})

test('error result', () => {
  const result = doSomenthing(false)

  expect(result.isRight()).toBe(false)
})
