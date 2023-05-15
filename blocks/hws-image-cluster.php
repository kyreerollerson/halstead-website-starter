<?php
$id = $component['id'] ?: hws_generate_id();
?>

<div id="<?= $id ?>" class="hws-image-cluster hws-block--padded">
  <div class="hws-container--large">
    <div class="hws-image-cluster__inner">
      <?php 
      for ($i=1; $i <= 3; $i++): 
        $image = $component['image_' . $i];
        // var_dump( $image );
        $bg = wp_get_attachment_image_src( $image['image'], 'full' )[0];
        $not_present_class = $bg ? '' : ' image-not-present';
        $pos = $image['position'] == 'custom'
          ? $image['custom_position']
          : $image['position'];
      ?>
        <div class="hws-image-cluster__image-<?= $i ?><?= $not_present_class ?>" style="background-image: url('<?= $bg ?>'); background-position: <?= $pos ?>"></div>
      <?php endfor; ?>
    </div>
  </div>
</div>

<div id="<?= $id ?>-mobile" class="hws-image-cluster-mobile hws-block--padded">
  <div class="hws-container--large">
    <?php 
    for ($i=1; $i <= 3; $i++): 
      $image = $component['image_' . $i . '_mobile']['image'] 
        ? $component['image_' . $i . '_mobile']
        : $component['image_' . $i];
      // var_dump( $image );
      $bg = wp_get_attachment_image_src( $image['image'], 'full' )[0];
      $not_present_class = $bg ? '' : ' image-not-present';
      $pos = $image['position'] == 'custom'
        ? $image['custom_position']
        : $image['position'];
    ?>
      <div class="hws-image-cluster-mobile__image-<?= $i ?> hws-image-cluster-mobile__image<?= $not_present_class ?>" data-index="<?= $i - 1 ?>" style="background-image: url('<?= $bg ?>'); background-position: <?= $pos ?>"></div>
    <?php endfor; ?>
  </div>
</div>