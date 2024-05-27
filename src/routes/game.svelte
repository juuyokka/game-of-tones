<script lang="ts">
  import Words from './words';
  import { type State, Word } from './types';
  import { randInt } from './util';
  import WordButton from './word-button.svelte';

  let category = 0;
  let germanicWord = 0;
  let latinateWord = 0;
  let correct = 0;
  let incorrect = 0;
  let state: State = 'guessing';

  $: wordPair = [
    Words[category].germanic[germanicWord],
    Words[category].latinate[latinateWord],
  ].sort(() => Math.random() - 0.5);

  $: word1 = wordPair[0];
  $: word2 = wordPair[1];

  const resetState = () => {
    category = randInt(0, Words.length);
    germanicWord = randInt(0, Words[category].germanic.length);
    latinateWord = randInt(0, Words[category].latinate.length);
    state = 'guessing';
  };

  const checkGuess = (word: Word) => {
    state = 'display';
    if (word.type == 'germanic') correct++;
    else incorrect++;
    setTimeout(resetState, 1000);
  };

  const handleGuess = (word: Word) => {
    if (state == 'display') return;
    checkGuess(word);
  };

  resetState();
</script>

<div class="buttons">
  <WordButton
    action={() => {
      handleGuess(word1);
    }}
    word={word1}
    gameState={state}
  />
  <WordButton
    action={() => {
      handleGuess(word2);
    }}
    word={word2}
    gameState={state}
  />
</div>

<div class="score">
  <span>Right: {correct}</span>
  <span>Wrong: {incorrect}</span>
</div>

<style lang="scss">
  div {
    width: 80%;
    margin: auto;
    display: flex;
    gap: 1ch;

    &.score {
      justify-content: right;
    }
  }

  @media (max-width: 768px) {
    div {
      width: 100%;
    }
  }
</style>
