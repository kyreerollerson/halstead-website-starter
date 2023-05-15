<?php
$quote = $component['quote'] ?: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
$person = $component['person'] ?: 'Jane Doe';
$title = $component['title'] ?: 'CEO of Fake Company';
$id = $component['id'] ?: hws_generate_id();
// $link = $component['link'] ?: 'Bottom caption here';
?>

<div id="<?= $id ?>" class="hws-blockquote hws-block--sticky-outer-300">
  <div class="hws-blockquote__sticky hws-block--sticky hws-block--full-height">
    <div class="hws-container--full">
      <blockquote class="hws--vertical-center">
        <p class="hws-blockquote__quote">
          <?= $quote ?>
        </p>
        <p class="hws-blockquote__person">
          <span><?= $person ?></span>
        </p>
        <p class="hws-blockquote__title">
          <?= $title ?>
        </p>
      </blockquote>
    </div>
  </div>
</div>

<div id="<?= $id ?>-mobile" class="hws-blockquote-mobile hws-block--padded">
  <p class="hws-blockquote-mobile__quote">
    <?= $quote ?>
  </p>
  <p class="hws-blockquote-mobile__person">
    <span><?= $person ?></span>
  </p>
  <p class="hws-blockquote-mobile__title">
    <?= $title ?>
  </p>
</div>