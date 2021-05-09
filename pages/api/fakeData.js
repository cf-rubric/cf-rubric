import faker from 'faker';

// Next.js treats any file within pages as an API endpoint
// your route, then, would be localhost:3000/api/fakeData

// (?.) = optional chaining allows reading a value of a property deep within a chain of connected objects without having to check that each reference in the chain is valid
// (??) = nullish coalescing operating. logical operator returns the right operand if the left one is null or undefined
export default (req, res) => {
  const limit = JSON.parse(req.body)?.limit ?? 10
  const studentNames = [...new Array(limit)].map((_, index) => {
    return {
      index,
      name: faker.name.findName(),
    }

  })
  res.status(200).json(JSON.stringify(studentNames))
}
