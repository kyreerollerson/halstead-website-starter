<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Halstead_Website_Starter
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <?php 
    hws_call_blocks( get_the_ID() );
  ?>
</article><!-- #post-<?php the_ID(); ?> -->
