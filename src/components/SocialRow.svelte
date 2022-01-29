<script lang="ts">
  import LinkedInIcon from "~icons/mdi/linkedin";
  import GithubIcon from "~icons/fe/github";
  import TwitterIcon from "~icons/fe/twitter";
  import MailIcon from "~icons/fe/mail";
</script>

<p class="animate__animated animate__fadeIn animate__delay-1s">Wanna chat?</p>
<p class="animate__animated animate__fadeIn animate__delay-1s">
  <a
    href="https://www.linkedin.com/in/ricardo-baquero/"
    class="mr-3"
    target="_blank"
  >
    <LinkedInIcon />
  </a>
  <a href="https://github.com/RickyTB" target="_blank">
    <GithubIcon />
  </a>
  <a href="https://twitter.com/RocordoB" class="mr-3" target="_blank">
    <TwitterIcon />
  </a>
  <a href="mailto:ricardo@buenplan.com.ec" class="mr-3" target="_blank">
    <MailIcon />
  </a>
</p>

<style lang="scss">
  p {
    font-size: 1.25rem;
    margin-bottom: 0.2rem;
  }
  a {
    --size: 3rem;
    height: var(--size);
    width: var(--size);
    background-color: transparent;
    color: #fff;
    border-radius: 50%;
    font-size: 1.6rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    &:hover {
      background-color: var(--link-color-hover);
      color: #000;
    }
    &:focus {
      background-color: var(--link-color-focus);
    }
  }
</style>
