export type WordType = 'germanic' | 'latinate';
export type State = 'guessing' | 'display';

export class Word {
  constructor(public word: string, public type: WordType) { }
}
