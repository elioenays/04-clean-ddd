import { InMemoryAnswerAttachmentsRepository } from 'test/repositories/in-memory-answer-attachments-repository'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { OnAnswerCreated } from './on-answer-created'
import { makeAnswer } from 'test/factories/make-answer'

let inMemoryAnswerRepository: InMemoryAnswersRepository
let inMemoryAnswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository

describe('On Answer Created', () => {
  beforeEach(() => {
    inMemoryAnswerAttachmentsRepository =
      new InMemoryAnswerAttachmentsRepository()

    inMemoryAnswerRepository = new InMemoryAnswersRepository(
      inMemoryAnswerAttachmentsRepository,
    )
  })
  it('should be able to send a notification when a answer is created', async () => {
    const onAswerCreated = new OnAnswerCreated()

    const answer = makeAnswer()

    inMemoryAnswerRepository.create(answer)
  })
})
