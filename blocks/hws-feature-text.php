<?php
$top_text= $component['top_text'] ?: false;
$center_text = $component['center_text'] ?: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
$bottom_text = $component['bottom_text'] ?: false;
$gradient = $component['gradient'];
$id = $component['id'] ?: hws_generate_id();
?>

<div id="<?= $id ?>" class="hws-feature-text hws-block--sticky-outer-300 hws-block--padded">
  <div class="hws-feature-text__sticky hws-block--sticky hws-block--full-height">
    <div class="hws-container--large">
      <div class="hws--vertical-center">
        <?php if ( $top_text ): ?>
        <p class="hws-feature-text__top-text">
          <?= $top_text ?>
        </p>
        <?php endif; ?>
        <p class="hws-feature-text__center-text<?= $gradient ? ' hws-feature-text__center-text--gradient' : '' ?>">
          <?= $center_text ?><span class="hws-feature-text__size-checker">.</span>
          <span class="hws-feature-text__center-text__highlighters">
          </span>
          <span class="hws-feature-text__center-text__highlighter-overlays">
          </span>
        </p>
        <?php if ( $bottom_text ): ?>
        <p class="hws-feature-text__bottom-text">
          <?= $bottom_text ?>
        </p>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>

<div id="<?= $id ?>-mobile" class="hws-feature-text-mobile hws-block--padded">
  <p class="hws-feature-text-mobile__top-text">
    <?= $top_text ?>
  </p>
  <p class="hws-feature-text-mobile__center-text<?= $gradient ? ' hws-feature-text__center-text--gradient' : '' ?>">
    <?= $center_text ?><span class="hws-feature-text-mobile__size-checker">.</span>
    <span class="hws-feature-text-mobile__center-text__highlighters">
    </span>
    <span class="hws-feature-text-mobile__center-text__highlighter-overlays">
    </span>
  </p>
  <p class="hws-feature-text-mobile__bottom-text">
    <?= $bottom_text ?>
  </p>
</div>