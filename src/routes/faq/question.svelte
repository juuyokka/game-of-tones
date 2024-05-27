<script lang="ts">
  export let question = "";
</script>

<li>
  <small>
    <strong>{question}</strong>
    <slot />
  </small>
</li>

<style>
  li {
    list-style-type: none;
  }
</style>
