<script lang="ts">
  import SendIcon from "~icons/mdi/send";
  import { parseForm } from "../util/helpers";
  import Spinner from "./Spinner.svelte";
  import CheckIcon from "~icons/mdi/check-circle-outline";
  import { addDoc, collection } from "firebase/firestore/lite";
  import { firestore } from "../lib/firestore";

  type ContactValues = {
    name: string;
    email: string;
    message: string;
  };

  let loading = false;
  let success = false;

  async function handleSubmit(e) {
    loading = true;
    const formData = new FormData(e.target);
    const data = parseForm<ContactValues>(formData);
    try {
      await addDoc(collection(firestore, "messages"), data);
      success = true;
    } catch (e) {
      console.log(e);
    }
    loading = false;
  }
</script>

<h2 id="contact">Get in touch</h2>
<div class="card">
  <div class="row">
    <form class="content" method="post" on:submit|preventDefault={handleSubmit}>
      <p>
        Looking to hire a remote software developer to help you build an amazing
        app? Send me a message and I'll be more than happy to help.
      </p>
      <div class="form-group">
        <label for="form-name">Name</label>
        <input
          type="text"
          name="name"
          id="form-name"
          class="input"
          placeholder="Your name"
          required
          disabled={loading}
        />
      </div>
      <div class="form-group">
        <label for="form-email">Email</label>
        <input
          type="email"
          name="email"
          id="form-email"
          class="input"
          placeholder="Your email address"
          required
          disabled={loading}
        />
      </div>
      <div class="form-group">
        <label for="form-message">Message</label>
        <textarea
          name="message"
          id="form-message"
          cols="30"
          rows="10"
          class="input"
          placeholder="Hey, I really like your website! Let's talk..."
          required
          disabled={loading}
        />
      </div>
      {#if loading}
        <Spinner>Sending message...</Spinner>
      {:else if success}
        <div class="animate__animated animate__fadeIn">
          <h4><span><CheckIcon /></span> Your message was succesfully sent!</h4>
        </div>
      {:else}
        <button class="primary">
          <span><SendIcon /></span> Send message
        </button>
      {/if}
    </form>
    <div class="contact-pic" />
  </div>
</div>

<style lang="scss">
  @import "../styles/helpers.scss";

  .card {
    overflow: hidden;
  }

  .row {
    display: flex;
    gap: 1rem;
    flex-direction: column;

    @include breakpoint("md") {
      flex-direction: row;
    }
  }

  .contact-pic {
    background: url("/img/dev_pic.jpg") no-repeat;
    background-size: cover;

    @include breakpoint("md") {
      width: 33%;
    }
  }

  .content {
    padding: 1.5rem;
    flex: 1;
  }

  span {
    vertical-align: middle;
    line-height: 1;
  }
</style>
