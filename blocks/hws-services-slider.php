<?php
$id = $component['id'] ?: hws_generate_id();
$slides = $component['slides'];
?>

<div id="<?= $id ?>" class="hws-services-slider hws-block--sticky-outer-300">
  <div class="hws-services-slider__sticky hws-block--sticky hws-block--full-height">
    <h2 class="hws-services-slider__heading">Our Programs</h2>
    <div class="hws-services-slider__carousel">
      <?php foreach ( $slides as $key => $slide ): ?>
        <div class="hws-services-slider__carousel__single" data-index="<?= $key ?>" style="background-image: url('<?= wp_get_attachment_image_url( $slide['background'], 'full' ) ?>')">
          <div class="hws-services-slider__carousel__single__overlay" style="background-color:<?= $slide['overlay'] ?>"></div>
          <div class="hws-services-slider__carousel__single__overlay-start"></div>
          <div class="hws-services-slider__carousel__single__content">
            <h3 class="hws-services-slider__carousel__single__title"><?= $slide['title'] ?></h3>
            <p class="hws-services-slider__carousel__single__text"><?= $slide['text'] ?></p>
            <div class="hws-services-slider__carousel__single__button-container">
              <?php
              $link = $slide['link'] ?: hws_generate_blank_link();
              ?>
              <a class="hws-button hws-button--white" target="<?= $link['target'] ?>" href="<?= $link['url'] ?>">
                <?= $link['title'] ?>
              </a>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
   </div>
</div>

<div id="<?= $id ?>-mobile" class="hws-services-slider-mobile hws-block--padded">
  <h2 class="hws-services-slider-mobile__heading animation--fade-in-up">Our Programs</h2>
  <div class="hws-container--large">
    <?php foreach ( $slides as $key => $slide ): ?>
      <div class="hws-services-slider-mobile__single animation--fade-in-up" data-index="<?= $key ?>" style="background-image: url('<?= wp_get_attachment_image_url( $slide['background'], 'full' ) ?>')">
        <div class="hws-services-slider-mobile__single__overlay" style="background-color:<?= $slide['overlay'] ?>"></div>
        <div class="hws-services-slider-mobile__single__overlay-start"></div>
        <div class="hws-services-slider-mobile__single__content">
          <h3 class="hws-services-slider-mobile__single__title"><?= $slide['title'] ?></h3>
          <p class="hws-services-slider-mobile__single__text"><?= $slide['text'] ?></p>
          <div class="hws-services-slider-mobile__single__button-container">
            <?php
            $link = $slide['link'] ?: hws_generate_blank_link();
            ?>
            <a class="hws-button hws-button--white" target="<?= $link['target'] ?>" href="<?= $link['url'] ?>">
              <?= $link['title'] ?>
            </a>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>