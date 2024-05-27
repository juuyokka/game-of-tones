<script>
  import Game from './game.svelte';
  import { base } from '$app/paths';
</script>

<div class="container">
  <h1>Game of Tones</h1>

  <Game />

  <hr />

  <div>
    <p>
      Game of Tones is a web-based linguistics game where you are presented with
      two English words and must determine which one is of Germanic origin and
      which one is Latinate. To play, simply click the word you believe is
      Germanic.
    </p>
  </div>

  <hr />

  <p>
    Note: The data for this game was taken from a <a
      href="https://en.wikipedia.org/wiki/List_of_Germanic_and_Latinate_equivalents_in_English"
      >List of Germanic and Latinate equivalents in English</a
    >
    on Wikipedia. The content of the article is licensed under
    <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
      >Creative Commons BY-SA 4.0</a
    >.
  </p>

  <hr>

  <a href="{base}/faq">FAQ</a>
</div>

<style>
</style>
