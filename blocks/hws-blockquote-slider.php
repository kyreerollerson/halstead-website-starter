<?php
$quote = $component['quote'] ?: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
$slides = $component['slides'] ?: hws_generate_blockquote_slides();
$id = $component['id'] ?: hws_generate_id();
// $link = $component['link'] ?: 'Bottom caption here';
?>

<div id="<?= $id ?>" class="hws-blockquote-slider hws-block--full-height animation--fade-in">
  <div class="hws-blockquote-slider__inner">
    <?php foreach( $slides as $key => $slide ): ?>
      <blockquote class="hws-blockquote-slider__slide">
        <div class="hws--vertical-center">
          <div class="hws-blockquote-slider__slide__text">
            <p class="hws-blockquote-slider__slide__big-text">
              <?= $slide['big_text'] ?>
            </p>
            <p class="hws-blockquote-slider__slide__small-text">
              <?= $slide['small_text'] ?>
            </p>
          </div>
          <p class="hws-blockquote-slider__slide__attribution">
            <?= $slide['attribution'] ?>
          </p>
        </div>
      </blockquote>
    <?php endforeach; ?>
  </div>
</div>
