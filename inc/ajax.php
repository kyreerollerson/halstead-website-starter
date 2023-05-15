<?php

function lion_get_programs() {
  $poss_answers = array();
  // for tone
  if ( $goal == 'tone' ) {
    if ( $setting == 'private' ) {
      
    }
  }
}
add_action( 'wp_ajax_lion_get_programs', 'lion_get_programs' );
add_action( 'wp_ajax_nopriv_lion_get_programs', 'lion_get_programs' );