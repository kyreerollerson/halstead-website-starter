<?php
$title = $component['title'];
$slides = $component['slides'];
$id = $component['id'] ?: hws_generate_id();
// $link = $component['link'] ?: 'Bottom caption here';
?>

<div id="<?= $id ?>" class="hws-staff-slider hws-block--full-height animation--fade-in">
  <div class="hws-staff-slider__inner">
    <div class="hws-staff-slider__title-container">
      <div class="hws-staff-slider__title-container__left"></div>
      <div class="hws-staff-slider__title-container__right">
        <h2 class="hws-staff-slider__title-container__title"><?= $title ?></h2>
      </div>
    </div>
    <div class="hws-staff-slider__slides">
      <?php foreach( $slides as $key => $slide ): ?>
        <div class="hws-staff-slider__slide">
          <?php
          $bg = wp_get_attachment_image_src( $slide['headshot'], 'full' )[0];
          $pos = $slide['position'] == 'custom'
            ? $slide['custom_position']
            : $slide['position'];
          ?>
          <div class="hws-staff-slider__slide__image" style="background-image: url('<?= $bg ?>'); background-position: <?= $pos ?>">

          </div>
          <div class="hws-staff-slider__slide__content">
            <h3 class="hws-staff-slider__slide__name">
              <?= $slide['name'] ?>
            </h3>
            <p class="hws-staff-slider__slide__text">
              <?= $slide['text'] ?>
            </p>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</div>

<div id="<?= $id ?>-mobile" class="hws-staff-slider-mobile hws-block--padded">
  <div class="hws-container--large">
    <h2 class="hws-staff-slider-mobile__title animation--fade-in-up"><?= $title ?></h2>
    <?php foreach( $slides as $key => $slide ): ?>
      <div class="hws-staff-slider-mobile__single animation--fade-in-up">
        <?php
        $bg = wp_get_attachment_image_src( $slide['headshot'], 'full' )[0];
        $pos = $slide['position'] == 'custom'
          ? $slide['custom_position']
          : $slide['position'];
        ?>
        <div class="hws-staff-slider-mobile__single__image" style="background-image: url('<?= $bg ?>'); background-position: <?= $pos ?>">

        </div>
        <div class="hws-staff-slider-mobile__single__content">
          <h3 class="hws-staff-slider-mobile__single__name">
            <?= $slide['name'] ?>
          </h3>
          <p class="hws-staff-slider-mobile__single__text">
            <?= $slide['text'] ?>
          </p>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>

