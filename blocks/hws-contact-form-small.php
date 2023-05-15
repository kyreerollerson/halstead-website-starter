<?php
// $quote = $component['quote'] ?: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
// $person = $component['person'] ?: 'Jane Doe';
// $title = $component['title'] ?: 'CEO of Fake Company';
// // $link = $component['link'] ?: 'Bottom caption here';
$id = $component['id'] ?: hws_generate_id();
?>

<div id="<?= $id ?>" class="hws-contact-form-small hws-block--padded">
  <div class="hws-container--large">
    <h2>Let's Connect</h2>
    <div class="hws-contact-form-small__flex">
      <div class="hws-contact-form-small__flex__left">
        <p class="hws-contact-form-small__directions"><strong>Halstead Websites is here whenever you need us.</strong> Ask your question here, and we’ll get back to you as soon as possible.</p>
        <p class="hws-contact-form-small__disclaimer">By filling out the form, you agree to our <a href="#">Privacy Policy</a></p>
      </div>
      <div class="hws-contact-form-small__flex__right">
        <form class="hws-form">
          <!-- name -->
          <div class="hws-form__group" required>
            <input type="text" placeholder="Name" id="hws-contact-form__name"></input>
            <label for="hws-contact-form__name">Name *</label>
          </div> <!-- /name -->
          <!-- email -->
          <div class="hws-form__group" required>
            <input type="email" placeholder="Email" id="hws-contact-form__email"></input>
            <label for="hws-contact-form__email">Email *</label>
          </div> <!-- /email -->
          <!-- message -->
          <div class="hws-form__group">
            <textarea id="hws-contact-form__message" placeholder="Message" required></textarea>
            <label for="hws-contact-form__message">Message *</label>
          </div> <!-- /message -->
          <!-- button -->
          <div class="hws-form__group">
            <button class="hws-button hws-button--black hws-button--medium" type="submit" data-site-key="">Submit</button>
          </div>
          <!-- /button -->
        </div>
      </div>
    </div>
  </div>
</div>