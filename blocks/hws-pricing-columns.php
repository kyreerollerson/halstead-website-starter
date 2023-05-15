<?php 
$id = $component['id'] ?: hws_generate_id();
$label = $component['label'] ?: 'Prices';
$columns = $component['columns'] ?: hws_generate_pricing_columns();
$size_class = count( $columns ) > 2
  ? ' hws-pricing-columns__flex--wrap'
  : '';
$size_class_mobile = count( $columns ) > 2
  ? ' hws-pricing-columns-mobile__flex--wrap'
  : '';
$show_monthly_and_yearly = $component['show_monthly_and_yearly'];
?>

<div id="<?= $id ?>" class="hws-pricing-columns hws-block--padded">
  <div class="hws-container--large">
    <h2 class="hws-pricing-columns__label"><?= $label ?></h2>
    <?php if ( $show_monthly_and_yearly ): ?>
    <div class="hws-pricing-columns__monthly-yearly">
        <span class="hws-pricing-columns__monthly-yearly__label">Monthly Billing</span>
        <span class="hws-pricing-columns__monthly-yearly__switch"></span>
        <span class="hws-pricing-columns__monthly-yearly__label">Yearly Billing</span>
    </div>
    <?php endif; ?>
    <div class="hws-pricing-columns__flex<?= $size_class ?>">
      <?php 
      foreach( $columns as $index => $column ):
        $theme_class = "hws-pricing-columns__flex__single--" . $column['theme'];
      ?>
        <div class="hws-pricing-columns__flex__single <?= $theme_class ?>" data-index="<?= $index ?>">
          <div class="hws-pricing-columns__flex__single__title-outer">
            <h3 class="hws-pricing-columns__flex__single__title">
              <span><?= $column['title'] ?></span>
            </h3>
          </div>
          <?php if ($column['price_caption']): ?>
            <div class="hws-pricing-columns__flex__single__price-caption">
              <?= $column['price_caption'] ?>
            </div>
          <?php endif; ?>
          <div class="hws-pricing-columns__flex__single__price">
            <span data-monthly="<?= $column['price'] ?>" data-yearly="<?= $column['price_yearly'] ?>"><?= $column['price'] ?></span>
          </div>
          <ul class="hws-pricing-columns__flex__single__bullets">
            <?php foreach ( $column['bullets'] as $bullet ): ?>
              <li class="hws-pricing-columns__flex__single__bullets__single">
                <?= $bullet['text'] ?>
              </li>
            <?php endforeach; ?>
          </ul>
          <?php 
            if ( $column['link'] ): 
              $link_color_class = $column['theme'] == 'dark'
                ? 'hws-button--white'
                : 'hws-button--black';
          ?>
            <a class="hws-button <?= $link_color_class ?> hws-button--small" target="<?= $column['link']['target'] ?>" href="<?= $column['link']['url'] ?>">
              <?= $column['link']['title'] ?>
            </a>
          <?php endif; ?>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</div>

<div id="<?= $id ?>" class="hws-pricing-columns-mobile hws-block--padded">
  <div class="hws-container--large">
    <h2 class="hws-pricing-columns-mobile__label"><?= $label ?></h2>
    <?php if ( $show_monthly_and_yearly ): ?>
    <div class="hws-pricing-columns-mobile__monthly-yearly">
        <span class="hws-pricing-columns-mobile__monthly-yearly__label">Monthly Billing</span>
        <span class="hws-pricing-columns-mobile__monthly-yearly__switch"></span>
        <span class="hws-pricing-columns-mobile__monthly-yearly__label">Yearly Billing</span>
    </div>
    <?php endif; ?>
    <div class="hws-pricing-columns-mobile__flex">
      <?php 
      foreach( $columns as $index => $column ):
        $theme_class_mobile = "hws-pricing-columns-mobile__flex__single--" . $column['theme'];
      ?>
        <div class="hws-pricing-columns-mobile__flex__single <?= $theme_class_mobile ?>" data-index="<?= $index ?>">
          <div class="hws-pricing-columns-mobile__flex__single__title-outer">
            <h3 class="hws-pricing-columns-mobile__flex__single__title">
              <span><?= $column['title'] ?></span>
            </h3>
          </div>
          <?php if ($column['price_caption']): ?>
            <div class="hws-pricing-columns-mobile__flex__single__price-caption">
              <?= $column['price_caption'] ?>
            </div>
          <?php endif; ?>
          <div class="hws-pricing-columns-mobile__flex__single__price">
            <span data-monthly="<?= $column['price'] ?>" data-yearly="<?= $column['price_yearly'] ?>"><?= $column['price'] ?></span>
          </div>
          <ul class="hws-pricing-columns-mobile__flex__single__bullets">
            <?php foreach ( $column['bullets'] as $bullet ): ?>
              <li class="hws-pricing-columns-mobile__flex__single__bullets__single">
                <?= $bullet['text'] ?>
              </li>
            <?php endforeach; ?>
          </ul>
          <?php 
            if ( $column['link'] ): 
              $link_color_class = $column['theme'] == 'dark'
                ? 'hws-button--white'
                : 'hws-button--black';
          ?>
            <a class="hws-button <?= $link_color_class ?> hws-button--small" target="<?= $column['link']['target'] ?>" href="<?= $column['link']['url'] ?>">
              <?= $column['link']['title'] ?>
            </a>
          <?php endif; ?>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</div>