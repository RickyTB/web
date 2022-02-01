<script lang="ts">
  import SocialRow from "./SocialRow.svelte";

  export let name = "Ricardo Baquero";
</script>

<footer>
  &copy; {new Date().getFullYear()}
  {name}
  <SocialRow class="row" />
</footer>

<style lang="scss">
  footer {
    text-align: center;
    padding: 4rem 2rem 4rem;
    :global(.row) {
      margin-top: 0.25rem;
      --heading-color: #ffffffaa;
      :global(a) {
        transform: scale(0.9);
      }
    }
  }
</style>
