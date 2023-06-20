import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'

export class InMemoryQuestionAttachmentsRepository
  implements QuestionAttachmentsRepository
{
  public items: QuestionAttachment[] = []

  async findManyByQuestionId(questionId: string) {
    const questionsAttachments = this.items.filter(
      (item) => item.questionId.toString() === questionId,
    )

    return questionsAttachments
  }

  async deleteManyByQuestionId(questionId: string): Promise<void> {
    const questionsAttachments = this.items.filter(
      (item) => item.questionId.toString() !== questionId,
    )

    this.items = questionsAttachments
  }
}
