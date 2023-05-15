<?php
$id = $component['id'] ?: hws_generate_id();
$label = $component['label'];
$text = $component['text'];
hws_generate_styles( $id, $component );
?>
<div id="<?= $id ?>" class="hws-label-text hws-block--padded">
  <div class="hws-container--large">
    <h2>
      <span class="hws-label-text__label"><?= $label ?></span>
      <span class="hws-label-text__text"><?= $text ?></span>
    </h2>
  </div>
</div>