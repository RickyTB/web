<li><a href="/#about">About</a></li>
<li><a href="/projects">My Projects</a></li>
<li><a href="/#contact">Contact</a></li>

<style lang="scss">
  @import "../styles/helpers.scss";

  li a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: var(--navbar-text-color);
    &:hover {
      color: var(--navbar-hover-color);
    }
    &:focus {
      color: var(--navbar-focus-color);
    }
  }
</style>
