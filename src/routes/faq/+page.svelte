<script>
  import Question from './question.svelte';
  import { base } from '$app/paths';
</script>

<div class="container">
  <h1>FAQ</h1>

  <hr />

  <ul>
    <Question question="Why did you create this game?">
      <p>
        One of the most pivotal events in the history of the English language is
        the <a href="https://en.wikipedia.org/wiki/Norman_Conquest"
          >Norman Conquest</a
        >
        of England in the 11th century. The Norman victory exposed the Anglo-Saxons,
        the native Germanic inhabitants, to Old Norman French. Over time, this exposure
        lead to the English language gaining loan words from French and Latin. For
        more reading, check out
        <a href="https://anglisc.miraheze.org/wiki/Main_Leaf"
          >The Anglish (Anglisc) Wiki</a
        >.
      </p>
      <p>
        I got the idea while talking with some friends talking about <a
          href="https://en.wikipedia.org/wiki/William_the_Conqueror"
          >William the Bastard/Conqueror</a
        > and how he "ruined" the English language by associating with the French.
        I thought it would make for a fun game to identify words that are "pure",
        and aren't borrowed from other languages.
      </p>
    </Question>

    <Question question="Where did you get the word list?">
      <p>
        The list was obtained from a <a
          href="https://en.wikipedia.org/wiki/List_of_Germanic_and_Latinate_equivalents_in_English"
          >List of Germanic and Latinate equivalents in English</a
        >
        on Wikipedia. The content of the page and any derivative work is licensed
        under
        <a href="https://creativecommons.org/licenses/by-sa/4.0/"
          >CC BY-SA 4.0</a
        >.
      </p>
    </Question>

    <Question question="Why is the logo a &quot;P&quot;?">
      <p>
        That is not a "P", that's a "Ƿ" (<a
          href="https://en.wikipedia.org/wiki/Wynn">wynn</a
        >)! It's a letter of the Old English alphabet that fell out of use
        during the Middle English period in favor of the digraph "W".
      </p>
    </Question>
  </ul>

  <hr />

  <a href="{base}/">Return to game</a>
</div>

<style>
  ul {
    padding-inline-start: 0;
  }
</style>
