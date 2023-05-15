<?php 
$id = $component['id'] ?: hws_generate_id();
$list_items = $component['list_items']
  ?: array(
    array(
      'title' => 'List Item 1.',
      'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget purus interdum, consectetur ligula sed, laoreet elit. Nam eleifend enim id nulla laoreet, nec iaculis mauris commodo. Sed vulputate nulla pulvinar tortor consectetur varius.'
    ),
    array(
      'title' => 'List Item 2.',
      'text' => 'Nulla sit amet tincidunt purus. Morbi lorem tellus, dapibus eget neque vitae, lobortis tempus lectus. Sed fermentum vestibulum imperdiet. Vivamus eget libero dignissim, pharetra enim at, gravida dolor.'
    ),
    array(
      'title' => 'List Item 3.',
      'text' => 'Suspendisse potenti. Nulla eget libero sit amet mi vestibulum condimentum. Donec sodales dolor vitae magna suscipit congue. Etiam vitae libero lacus.'
    )
    );


$size = count( $list_items );
$size_class = ' hws-pricing-columns__flex--count-1';

if ( $size >= 4 ) {
  $size_class = ' hws-pricing-columns__flex--count-4';
} else if ( $size == 3 ) {
  $size_class = ' hws-pricing-columns__flex--count-3';
} else if ( $size == 2 ) {
  $size_class = ' hws-pricing-columns__flex--count-2';
}

hws_generate_styles( $id, $component );
?>

<div id="<?= $id ?>" class="hws-list <?= $theme_class ?> hws-block--padded">
  <div class="hws-container--large">
    <div class="hws-list__flex<?= $size_class ?>">
      <?php 
      foreach( $list_items as $index => $list_item ):
      ?>
        <div class="hws-list__flex__single animation--fade-in-up" data-index="<?= $index ?>">
          <h2 class="hws-list__flex__single__title"><span><?= $list_item['title'] ?></span></h2>
          <p class="hws-list__flex__single__text"><?= $list_item['text'] ?></p>
          <?php if ( $list_item['link'] ): ?>
            <div class="hws-list__flex__single__button-container">
              <a class="hws-button hws-button--black" target="<?= $list_item['link']['target'] ?>" href="<?= $list_item['link']['url'] ?>">
                <?= $list_item['link']['title'] ?>
              </a>
            </div>
          <?php endif; ?>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</div>