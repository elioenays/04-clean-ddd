import { UniqueEntityID } from '@/core/entities/unique-entity-id'

import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

interface AnswerQuestionUseCaseRequest {
  content: string
  instructorId: string
  questionId: string
}

interface AnswerQuestionUseCaseResponse {
  answer: Answer
}

export class AnswerQuestionUseCase {
  constructor(private readonly answersRepository: AnswersRepository) {}
  async execute({
    content,
    instructorId,
    questionId,
  }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answersRepository.create(answer)

    return { answer }
  }
}
