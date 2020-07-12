interface Answer {
  questionId: number;
  answerId: number;
}

export interface AnswerTrainingDTO {
  trainingId: number;
  answers: Answer[];
}
