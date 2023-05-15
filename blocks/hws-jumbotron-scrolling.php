<?php
$slides = $component['slides'] ?: null;
$id = $component['id'] ?: hws_generate_id();
$overlay_color = $component['overlay_color'];
$icon = $component['icon'];
$title = $component['title'] ?: 'Your Title Here';
$link = $component['continue_link'] ?: hws_generate_blank_link();
?>

<div id="<?= $id ?>" class="hws-jumbotron-scrolling hws-block--sticky-outer-300">
  <div class="hws-jumbotron-scrolling__sticky hws-block--sticky hws-block--full-height">
    <?php 
    foreach( $slides as $index => $slide ) {
      $background_image = $slide['background_image'];
      hws_generate_sticky_bg_image( 
        $background_image,
        'hws-jumbotron-scrolling__sticky__bg-image', 
        $index
      );
    }
    ?>
    <div class="hws-jumbotron-scrolling__sticky__overlay" style="background-color: <?= $overlay_color ?>"></div>
    <div class="hws-container--large">
      <div class="hws--vertical-center">
        <div class="hws-jumbotron-scrolling__icon">
          <?php
          foreach( $slides as $index => $slide ) {
            $icon = $slide['icon'];
            echo wp_get_attachment_image( 
              $icon,
              'full',
              false,
              array(
                'class' => 'hws--horizontal-center-abs',
                'data-index' => $index
              ) 
            ); 
          }
          ?>
        </div>
        <h1 class="hws-jumbotron-scrolling__title">
          <?= $title ?>
        </h1>
      </div>
    </div>
    <div class="hws-jumbotron-scrolling__scroll-icon-box">
      <img src="<?= get_stylesheet_directory_uri() ?>/images/icons/scroll-icon.svg?<?= time() ?>"/>
    </div>
  </div>
</div>
