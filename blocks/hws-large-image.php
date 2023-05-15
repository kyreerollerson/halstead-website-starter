<?php
$image = $component['image'];
$id = $component['id'] ?: hws_generate_id();
?>

<div id="<?= $id ?>" class="hws-large-image hws-block--sticky-outer-300 animation--fade-in">
  <div class="hws-large-image__sticky hws-block--sticky hws-block--full-height">
   <div class="hws--vertical-center">
    <div class="hws-large-image__inner">
        <div class="hws-large-image__inner__image animation--background-shrink" style="background-image: url('<?= wp_get_attachment_image_src( $image, 'full' )[0] ?>')">
        </div>
      </div>
    </div>
  </div>
</div>

<div id="<?= $id ?>-mobile" class="hws-large-image-mobile hws-block--padded animation--fade-in">
  <div class="hws-large-image-mobile__inner">
      <div class="hws-large-image-mobile__inner__image animation--background-shrink" style="background-image: url('<?= wp_get_attachment_image_src( $image, 'full' )[0] ?>')">
      </div>
    </div>
  </div>
</div>