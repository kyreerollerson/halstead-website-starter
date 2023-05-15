<?php 
$id = $component['id'] ?: hws_generate_id();
$columns = $component['columns'] ?: hws_generate_next_steps_columns();
$size_class = count( $columns ) > 2
  ? ' hws-next-steps__flex--wrap'
  : '';
$size_class_mobile = count( $columns ) > 2
  ? ' hws-next-steps-mobile__flex--wrap'
  : '';
?>

<div id="<?= $id ?>" class="hws-next-steps <?= $theme_class ?> hws-block--padded animation--fade-in">
  <div class="hws-container--large">
    <h2 class="hws-next-steps__heading animation--fade-in-up">Next Steps</h2>
    <div class="hws-next-steps__flex<?= $size_class ?>">
      <?php 
      foreach( $columns as $index => $column ):
      ?>
        <a class="hws-next-steps__flex__single animation--fade-in-up" data-index="<?= $index ?>" href="<?= $column['link'] ? $column['link']['url'] : '#' ?>">
          <?php
            $image = null;
            if ( $column['image'] ) {
              $image = wp_get_attachment_image_url( 
                $column['image'],
                'full',
                false,
              ); 
            }
            ?>
          <div class="hws-next-steps__flex__single__image" style="background-image: url('<?= $image ?>')"></div>
          <h3 class="hws-next-steps__flex__single__title"><?= $column['title'] ?></h3>
          <p class="hws-next-steps__flex__single__text"><?= $column['text'] ?></p>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</div>

<div id="<?= $id ?>-mobile" class="hws-next-steps-mobile hws-block--padded animation--fade-in">
  <div class="hws-container--large">
    <h2 class="hws-next-steps-mobile__heading animation--fade-in-up">Next Steps</h2>
    <div class="hws-next-steps-mobile__flex<?= $size_class_mobile ?>">
      <?php 
      foreach( $columns as $index => $column ):
      ?>
        <a class="hws-next-steps-mobile__flex__single animation--fade-in-up" data-index="<?= $index ?>" href="<?= $column['link']['url'] ?>">
          <?php
            $image = null;
            if ( $column['image'] ) {
              $image = wp_get_attachment_image_url( 
                $column['image'],
                'full',
                false,
              ); 
            }
            ?>
          <div class="hws-next-steps-mobile__flex__single__image" style="background-image: url('<?= $image ?>')"></div>
          <h3 class="hws-next-steps-mobile__flex__single__title"><?= $column['title'] ?></h3>
          <p class="hws-next-steps-mobile__flex__single__text"><?= $column['text'] ?></p>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</div>
