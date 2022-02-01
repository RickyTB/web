<script lang="ts">
  import SendIcon from "~icons/mdi/send";
  import EmailIcon from "~icons/mdi/email";
</script>

<h2>Get in touch</h2>
<div class="card" id="contact">
  <div class="row">
    <form class="content" method="post">
      <p>
        Looking to hire a remote software developer to help you build an amazing
        app? Send me a message and I'll be more than happy to send you my
        resume.
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
        />
      </div>
      <button class="primary"><span><SendIcon /></span> Send message</button>
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
