<?php
$services = $component['services'];
$id = $component['id'] ?: hws_generate_id();
// $link = $component['link'] ?: 'Bottom caption here';
?>

<div id="<?= $id ?>" class="hws-services hws-block--sticky-outer-300 hws-block--padded">
  <div class="hws-services__sticky hws-block--sticky hws-block--full-height">
    <div class="hws-container--large">
      <div class="hws--vertical-center">
        <div class="hws-services__flex">
          <div class="hws-services__flex__left">
            <?php foreach ( $services as $key => $service ): ?>
              <h3 class="hws-services__heading" data-index="<?= $key ?>">
                <div class="hws-services__heading__icon"></div>
                <?= $service['title'] ?>
              </h3>
            <?php endforeach; ?>
          </div>
          <div class="hws-services__flex__right">
            <?php 
            foreach ( $services as $key => $service ): 
              $link = $service['link'] ?: hws_generate_blank_link();
            ?>
              <div class="hws-services__description"  data-index="<?= $key ?>">
                <p>
                  <?= $service['text'] ?>
                </p>
                <a class="hws-button hws-button--black hws-button--medium" target="<?= $link['target'] ?>" href="<?= $link['url'] ?>">
                  <?= $link['title'] ?>
                </a>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="<?= $id ?>" class="hws-services-mobile hws-block--padded">
  <div class="hws-services-mobile__flex">
    <?php 
    foreach ( $services as $key => $service ): 
      $link = $service['link'] ?: hws_generate_blank_link();
    ?>
      <div class="hws-services-mobile__single"  data-index="<?= $key ?>">
        <h3 class="hws-services-mobile__single__heading">
          <div class="hws-services-mobile__single__heading__icon"></div>
          <?= $service['title'] ?>
        </h3>
        <p>
          <?= $service['text'] ?>
        </p>
        <a class="hws-button hws-button--black" target="<?= $link['target'] ?>" href="<?= $link['url'] ?>">
          <?= $link['title'] ?>
        </a>
      </div>
    <?php endforeach; ?>
  </div>
</div>