<?php
$image = $component['image'];
?>
<div id="<?= $id ?>" class="hws-static-image hws-block--padded animation--fade-in-up">
  <div class="hws-container--large">
   <?= wp_get_attachment_image( $image, 'full' ) ?>
  </div>
</div>