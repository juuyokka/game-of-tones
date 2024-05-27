<script lang="ts">
  import { type State, Word } from './types';
  export let action = () => {};
  export let word: Word;
  export let gameState: State;

  $: displayState = gameState == 'display';
  $: germanic = displayState && word.type == 'germanic';
  $: latinate = displayState && word.type == 'latinate';
</script>

<button on:click={action} class:germanic class:latinate>{word.word}</button>

<style lang="scss">
  @use '@picocss/pico/scss/colors' as *;

  button {
    text-transform: capitalize;
    flex: 1;
    transition-duration: 200ms;
  }

  .germanic {
    background-color: $jade-500;
  }

  .latinate {
    background-color: $red-500;
  }
</style>
