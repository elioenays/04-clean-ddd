import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'

interface FetchQuestionsUseCaseRequest {
  page: number
}

interface FetchQuestionsUseCaseResponse {
  questions: Question[]
}

export class FetchQuestionsUseCase {
  constructor(private readonly questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchQuestionsUseCaseRequest): Promise<FetchQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    return { questions }
  }
}
