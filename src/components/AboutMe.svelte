<script lang="ts">
  import ReactIcon from "~icons/logos/react";
  import SvelteIcon from "~icons/logos/svelte-icon";
  import TypeScriptIcon from "~icons/logos/typescript-icon";
  import NodeIcon from "~icons/logos/nodejs-icon";
  import FlutterIcon from "~icons/logos/flutter";
  import KotlinIcon from "~icons/logos/kotlin";
  import SwiftIcon from "~icons/logos/swift";
</script>

<h2>About me</h2>
<div class="card" id="about">
  <div class="card-body">
    <div class="row">
      <div class="pic">
        <img src="/img/pic_web.jpeg" alt="Ricardo Baquero" />
      </div>
      <div class="content">
        <p>
          I'm a software developer with a passion in technology and learning. I
          created this website with the goal of experimenting with new
          languages, metodologies, or technology in general and record my
          findings.
        </p>
        <p class="no-space">
          Go ahead and check out some of my work, my favorite technologies
          currently are:
        </p>
        <ul>
          <li><ReactIcon /> React</li>
          <li><SvelteIcon /> Svelte</li>
          <li><TypeScriptIcon /> TypeScript</li>
          <li><NodeIcon /> Node.js</li>
          <li><FlutterIcon /> Flutter</li>
          <li><KotlinIcon /> Native Android development with Kotlin</li>
          <li><SwiftIcon /> Native iOS development with Swift</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../styles/helpers.scss";

  .row {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-direction: column;

    @include breakpoint("md") {
      flex-direction: row;
    }
  }
  .pic {
    img {
      --size: 160px;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      border: 2px solid var(--heading-color);
    }
  }
  .content {
    flex: 1;
  }
  .no-space {
    margin-bottom: 0.25rem;
  }
  ul {
    list-style: none;
    padding-left: 1.25rem;
    margin-bottom: 0;
    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.25rem;
      :global(svg) {
        margin-right: 0.5rem;
      }
    }
  }
</style>
