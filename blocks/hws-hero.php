<?php 
$id = $component['id'] ?: hws_generate_id();
$subtitle = $component['subtitle'];
$title = $component['title'] ?: 'Your Title Here';
$text = $component['text'];
$background_image = $component['background_image'];
$overlay = $component['overlay'];
?>
<div id="<?= $id ?>" class="hws-hero hws-block--padded hws-block--full-height">
  <div class="hws-hero__background animation--background-shrink" style="background-image: url('<?= wp_get_attachment_image_url( $background_image, 'full' ) ?>')"></div>
  <div class="hws-hero__overlay animation--fade-in-overlay" style="background-color: <?= $overlay ?>"></div>
  <div class="hws-container--large">
    <div class="hws--vertical-center">
      <?php if ( $subtitle ): ?>
        <h2 class="hws-hero__subtitle animation--fade-in-up">
          <span><?= $subtitle ?></span>
        </h2>
      <?php endif; ?>
      <h1 class="hws-hero__title animation--fade-in-up">
        <?= $title ?>
      </h1>
      <?php if ( $text ): ?>
        <p class="hws-hero__text animation--fade-in-up"><?= $text ?></p>
      <?php endif; ?>
    </div>
  </div>
</div>