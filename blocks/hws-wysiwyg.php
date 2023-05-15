<?php
$id = $component['id'] ?: hws_generate_id();
$content = $component['content'];
hws_generate_styles( $id, $component );
$links = $component['links'];
$animate = $component['animate'];
?>

<div id="<?= $id ?>" class="hws-wysiwyg<?= $animate ? ' hws-wysiwyg--animate' : '' ?> hws-block--padded">
  <div class="hws-container--large">
    <?= $content; ?>
    <?php if ( $links ): ?>
      <div class="hws-wysiwyg__button-container">
        <?php foreach ( $links as $link ): 
          $link = $link['link'] ?: hws_generate_blank_link();
        ?>
          <a class="hws-button hws-button--black" target="<?= $link['target'] ?>" href="<?= $link['url'] ?>">
            <?= $link['title'] ?>
          </a>
        <?php endforeach ?>
      </div>
    <?php endif; ?>
  </div>
</div>