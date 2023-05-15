<?php 
$id = $component['id'] ?: hws_generate_id();
$prices = $component['prices'];
$size = count( $prices );
$size_class = ' hws-pricing__flex--count-1';

if ( $size >= 4 ) {
  $size_class = ' hws-pricing__flex--count-4';
} else if ( $size == 3 ) {
  $size_class = ' hws-pricing__flex--count-3';
} else if ( $size == 2 ) {
  $size_class = ' hws-pricing__flex--count-2';
}

hws_generate_styles( $id, $component );
?>

<div id="<?= $id ?>" class="hws-pricing <?= $theme_class ?> hws-block--padded">
  <div class="hws-container--large">
    <h2 class="animation--fade-in-up">Pricing</h2>
    <div class="hws-pricing__flex<?= $size_class ?>">
      <?php 
      foreach( $prices as $index => $price ):
      ?>
        <div class="hws-pricing__flex__single animation--fade-in-up" data-index="<?= $index ?>">
          <?php if ( $price['title'] ): ?>
            <h3 class="hws-pricing__flex__single__title"><span><?= $price['title'] ?></span></h3>
          <?php endif; ?>
          <h4 class="hws-pricing__flex__single__price">
            <span><?= $price['price_number'] ?></span><span> <?= $price['price_caption'] ?></span>
          </h4>
          <?php if ( $price['description'] ): ?>
            <p class="hws-pricing__flex__single__description"><?= $price['description'] ?></p>
          <?php endif; ?>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</div>