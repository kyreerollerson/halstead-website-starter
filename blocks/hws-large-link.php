<?php
$id = $component['id'] ?: hws_generate_id();
$title = $component['title'] ?: 'This is a big link';
$text = $component['text'] ?: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.';
$link = $component['link'] ?: hws_generate_blank_link();
?>

<div id="<?= $id ?>" class="hws-large-link hws-block--sticky-outer-300">
  <div class="hws-large-link__sticky hws-block--sticky hws-block--full-height">
    <div class="hws-container--full">
      <div class="hws--vertical-center">
        <h2 class="hws-large-link__title">
          <?= $title ?>
        </h2>
        <p class="hws-large-link__text">
          <?= $text ?>
        </p>
        <div class="hws-large-link__button-container">
          <a class="hws-button hws-button--white-outline hws-button--medium" target="<?= $link['target'] ?>" href="<?= $link['url'] ?>">
            <?= $link['title'] ?>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="<?= $id ?>-mobile" class="hws-large-link-mobile hws-block--sticky-outer-300">
  <div class="hws-large-link-mobile__sticky hws-block--sticky hws-block--full-height">
    <div class="hws-container--full"></div>
    <div class="hws--vertical-center-abs">
      <h2 class="hws-large-link-mobile__title">
        <?= $title ?>
      </h2>
      <p class="hws-large-link-mobile__text">
        <?= $text ?>
      </p>
      <div class="hws-large-link-mobile__button-container">
        <a class="hws-button hws-button--white-outline hws-button--medium" target="<?= $link['target'] ?>" href="<?= $link['url'] ?>">
          <?= $link['title'] ?>
        </a>
      </div>
    </div>
  </div>
</div>