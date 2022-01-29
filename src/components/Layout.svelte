<script>
  import Nav from "./Nav.svelte";
  import Footer from "./Footer.svelte";

  export let sticky = false;
</script>

<Nav {sticky} />
<slot />
<Footer />
