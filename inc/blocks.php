<?php
/**
 * Call appropriate blocks
 */
function hws_call_blocks( $id ) {
  $all_components = get_field( 'all_components', $id );

  if (!$all_components) return;

  foreach ( $all_components as $key => $component ) {
    $component_name = $component['acf_fc_layout'];

    if ( $component_name == 'hws-jumbotron-scrolling') {
      include( __DIR__ . '/../blocks/hws-jumbotron-scrolling.php');
    }
    else if ( $component_name == 'hws_feature_text') {
      include( __DIR__ . '/../blocks/hws-feature-text.php');
    }
    else if ( $component_name == 'hws_services') {
      include( __DIR__ . '/../blocks/hws-services.php');
    }
    else if ( $component_name == 'hws_blockquote') {
      include( __DIR__ . '/../blocks/hws-blockquote.php');
    }
    else if ( $component_name == 'hws_featured_insight') {
      include( __DIR__ . '/../blocks/hws-featured-insight.php');
    }
    else if ( $component_name == 'hws_contact_form_small') {
      include( __DIR__ . '/../blocks/hws-contact-form-small.php');
    }
    else if ( $component_name == 'hws_hero') {
      include( __DIR__ . '/../blocks/hws-hero.php');
    }
    else if ( $component_name == 'hws_image_cluster') {
      include( __DIR__ . '/../blocks/hws-image-cluster.php');
    }
    else if ( $component_name == 'hws_list') {
      include( __DIR__ . '/../blocks/hws-list.php');
    }
    else if ( $component_name == 'hws_label_text') {
      include( __DIR__ . '/../blocks/hws-label-text.php');
    }
    else if ( $component_name == 'hws_large_link') {
      include( __DIR__ . '/../blocks/hws-large-link.php');
    }
    else if ( $component_name == 'hws_pricing_columns') {
      include( __DIR__ . '/../blocks/hws-pricing-columns.php');
    }
    else if ( $component_name == 'hws_wysiwyg') {
      include( __DIR__ . '/../blocks/hws-wysiwyg.php');
    }
    else if ( $component_name == 'hws_services_slider') {
      include( __DIR__ . '/../blocks/hws-services-slider.php');
    }
    else if ( $component_name == 'hws_transition') {
      include( __DIR__ . '/../blocks/hws-transition.php');
    }
    else if ( $component_name == 'hws_blockquote_slider') {
      include( __DIR__ . '/../blocks/hws-blockquote-slider.php');
    }
    else if ( $component_name == 'hws_next_steps') {
      include( __DIR__ . '/../blocks/hws-next-steps.php');
    }
    else if ( $component_name == 'hws_staff_slider') {
      include( __DIR__ . '/../blocks/hws-staff-slider.php');
    }
    else if ( $component_name == 'hws_large_image') {
      include( __DIR__ . '/../blocks/hws-large-image.php');
    }
    else if ( $component_name == 'hws_pricing') {
      include( __DIR__ . '/../blocks/hws-pricing.php');
    }
    else if ( $component_name == 'hws_quiz') {
      include( __DIR__ . '/../blocks/hws-quiz.php');
    }
    else if ( $component_name == 'hws_static_image') {
      include( __DIR__ . '/../blocks/hws-static-image.php');
    }
  }
}

?>