<?php
$id = $component['id'] ?: hws_generate_id();
$link = $component['link'] ?: hws_generate_blank_link();
?>

<div id="<?= $id ?>" class="hws-transition hws-block--padded hws-block--sticky-outer-400">
  <div class="hws-transition__sticky hws-block--sticky hws-block--full-height">
    <div class="hws-container--full">
      <div class="hws--vertical-center">
        <div class="hws-transition__flex">
          <img src="<?= get_stylesheet_directory_uri() ?>/images/graphics/transition-1.svg"/>
          <img src="<?= get_stylesheet_directory_uri() ?>/images/graphics/transition-2.svg"/>
          <img src="<?= get_stylesheet_directory_uri() ?>/images/graphics/transition-3.svg"/>
          <img src="<?= get_stylesheet_directory_uri() ?>/images/graphics/transition-4.svg"/>
        </div>
      </div>
    </div>
  </div>
</div>