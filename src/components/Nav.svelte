<script lang="ts">
  import { fade } from "svelte/transition";
  import MenuIcon from "~icons/mdi/menu";
  import MenuLinks from "./MenuLinks.svelte";

  export let sticky = false;

  let open: boolean = false;

  function toggleOpen() {
    open = !open;
  }
</script>

<header class:sticky>
  <nav>
    <ul>
      <li class="brand">
        <a href="/"><strong>Ricardo Baquero</strong></a>
      </li>
    </ul>
    <button class="menu" on:click={toggleOpen}>
      <MenuIcon />
    </button>
    <ul class="links">
      <MenuLinks />
    </ul>
  </nav>
  {#if open}
    <ul class="mobile" in:fade out:fade>
      <MenuLinks />
    </ul>
  {/if}
</header>

<style lang="scss">
  @import "../styles/helpers.scss";

  header {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(16, 16, 28, 0.75);
    &.sticky {
      position: sticky;
    }
  }

  nav {
    margin: 0 auto;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    @include breakpoint("lg") {
      max-width: 100rem;
    }
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .brand {
    font-size: 1.25rem;
    a {
      text-decoration: none;
    }
  }
  .menu {
    display: block;
    background-color: transparent;
    border: none;
    color: var(--link-color);
    border-radius: calc(var(--border-radius) / 2);
    padding: 0.25rem 0.5rem;
    line-height: 0.9;
    font-size: 1.25rem;
    outline: none;

    &:focus {
      color: var(--link-color-focus);
    }

    @include breakpoint("md") {
      display: none;
    }
  }
  .links {
    display: none;
    :global(li) {
      float: left;
      margin-right: 2rem;
      &:last-of-type {
        margin-right: 1rem;
      }
    }
    @include breakpoint("md") {
      display: block;
    }
  }
  .mobile {
    :global(li) {
      margin-bottom: 1rem;
    }
  }
</style>
