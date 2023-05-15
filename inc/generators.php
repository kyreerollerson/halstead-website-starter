<?php 

function hws_generate_id() {
  $str=rand();
  $id = md5($str);
  $id = substr( $id, 0, 7 );
  $final = 'block-' . $id;
  return $final;
}

function hws_generate_blank_link() {
  return array(
    'title' => 'Link Text Here',
    'url' => '#',
    'target' => ''
  );
}

function hws_generate_styles_inner( $id, $size, $screen_rules, $component ) {
  // opening media query statement
  if ( $screen_rules['min'] && $screen_rules['max'] ) {
    echo "@media (min-width:" . $screen_rules['min'] . "px) and (max-width: " . $screen_rules['max'] . "px) { ";
  } else if ( $screen_rules['min'] ) {
    echo "@media (min-width: " . $screen_rules['min'] . "px) { ";
  } else if ( $screen_rules['max'] ) {
    echo "@media (max-width: " . $screen_rules['max'] . "px) { ";
  }
  // opening css statement 
  echo "#" . $id . ", #" . $id . "-mobile {";
  // margin rules
  if ( $component['margin']["top_" . $size] != '' ) {
    echo "padding-top: " . $component['margin']['top_' . $size] . "rem;";
  }
  if ( $component['margin']["bottom_$size"] != '' ) {
    echo "padding-bottom: " . $component['margin']['bottom_' . $size] . "rem;";
  }
  // padding rules
  if ( $component['padding']["top_" . $size] != '' ) {
    echo "padding-top: " . $component['padding']['top_' . $size] . "rem;";
  }
  if ( $component['padding']["bottom_$size"] != '' ) {
    echo "padding-bottom: " . $component['padding']['bottom_' . $size] . "rem;";
  }
  // closing css statement 
  echo "}";
  // closing media query statement
  echo "}\n";
}


function hws_generate_styles( $id, $component ) {
  $bp_xxl_min = 1440;
  $bp_xl_max = 1439;
  $bp_xl_min = 1200;
  $bp_lg_max = 1199;
  $bp_lg_min = 992;
  $bp_md_max = 991;
  $bp_md_min = 768;
  $bp_sm_max = 767;
  $bp_sm_min = 576;
  $bp_xs_max = 575;
  $bp_xs_min = 481;     
  $bp_xxs_max = 480;
  $styles = array(
    'xxl' => array(
      'min' => $bp_xxl_min
    ),
    'xl' => array(
      'min' => $bp_xl_min,
      'max' => $bp_xl_max
    ),
    'lg' => array(
      'min' => $bp_lg_min,
      'max' => $bp_lg_max
    ),
    'md' => array(
      'min' => $bp_md_min,
      'max' => $bp_md_max
    ),
    'sm' => array(
      'min' => $bp_sm_min,
      'max' => $bp_sm_max
    ),
    'xs' => array(
      'min' => $bp_xs_min,
      'max' => $bp_xs_max
    ),
    'xxs' => array(
      'max' => $bp_xxs_max
    ),
  );
  echo '<style>';
  foreach ( $styles as $size => $rules ) {
    hws_generate_styles_inner( $id, $size, $rules, $component );
  }
  echo '</style>';
}

function hws_generate_pricing_column_bullets( $index ) {
  $limit = ceil( $index % 3 ) + 5 - ceil( $index % 2 ) - ceil( $index / 2 );
  $bullets = array();
  for ( $j = 0; $j < $limit; $j++ ) {
    $bullets[] = array(
      'text' => "Bullet Number " . ($j + 1)
    );
  }
  return $bullets;
}

function hws_generate_pricing_columns() {
  $columns = array();
  for ( $i = 0; $i < 3; $i++ ) {
    $column = array(
      'title' => "Column " . ($i + 1),
      'price_caption' => "Starts At",
      'price' => "$" . (($i * 200) + 99) . " /mo",
      'price_yearly' => ((($i * 200) + 99) - 50) . " /mo",
      'bullets' => hws_generate_pricing_column_bullets( $i ),
      'theme' => $i == 0 ? 'dark' : 'light',
      'link' => hws_generate_blank_link()
    );
    $columns[] = $column;
  }
  return $columns;
}

function hws_generate_blockquote_slides() {
  $slides = array();
  for ( $i = 1; $i <= 3; $i++ ) {
    $slide = array(
      'big_text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'small_text' => 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'attribution' => 'Source'
    );
    $slides[] = $slides;
  }
  return $slides;
}

function hws_generate_next_steps_columns() {
  $columns = array();
  array(
    array(
      'title' => 'Next Step 1',
      'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget purus interdum, consectetur ligula sed, laoreet elit. Nam eleifend enim id nulla laoreet, nec iaculis mauris commodo. Sed vulputate nulla pulvinar tortor consectetur varius.',
      'image' => null,
      'link' => hws_generate_blank_link()
    ),
    array(
      'title' => 'Next Step 2',
      'text' => 'Nulla sit amet tincidunt purus. Morbi lorem tellus, dapibus eget neque vitae, lobortis tempus lectus. Sed fermentum vestibulum imperdiet. Vivamus eget libero dignissim, pharetra enim at, gravida dolor.',
      'image' => null,
      'link' => hws_generate_blank_link()
    ),
    array(
      'title' => 'Next Step 3',
      'text' => 'Suspendisse potenti. Nulla eget libero sit amet mi vestibulum condimentum. Donec sodales dolor vitae magna suscipit congue. Etiam vitae libero lacus.',
      'image' => null,
      'link' => hws_generate_blank_link()
    )
  );
}

function hws_generate_sticky_bg_image( $bg_image, $classes, $index ) {
  if ( $bg_image ):
?>
  <div class="<?= $classes ? $classes . ' ' : ''?>hws--sticky-bg-image" style="background-image:url('<?= wp_get_attachment_url( $bg_image ) ?>')" data-index="<?= $index ?>">
  </div>
<?php
  endif;
}

?>
