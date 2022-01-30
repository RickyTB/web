<script lang="ts">
  export let sticky = false;
</script>

<header class:sticky>
  <nav>
    <ul>
      <li class="brand"><a href="/"><strong>Ricardo Baquero</strong></a></li>
    </ul>
    <ul>
      <li><a href="/#about">About</a></li>
      <li><a href="/portfolio">Portfolio</a></li>
      <li><a href="/#contact">Contact</a></li>
    </ul>
  </nav>
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
    padding: 0;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    li {
      float: left;
    }

    li a {
      display: block;
      text-align: center;
      padding: 1rem;
      text-decoration: none;
    }

    @include breakpoint("lg") {
      max-width: 100rem;
    }
  }
  .brand {
    font-size: 1.25rem;
  }
</style>
