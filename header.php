<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Halstead_Website_Starter
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php 
$page_id = get_queried_object_id();
$header_transition = get_field( 'header_transition', $page_id );
$general_consultation_link = get_field( 'general_consultation_link', 'option' ) ?: '#';
$landing_page = get_field( 'landing_page', $page_id );
$div_type = 'a';
if ($landing_page) {
  $div_type = 'div';
}
?>
<div id="hws-cursor">
  <div id="hws-cursor__inner" class="hws--center-abs"></div>
  <div id="hws-cursor__prev">
    <img src="<?= get_stylesheet_directory_uri() ?>/images/icons/left-arrow-white.svg"/>
  </div>
  <div id="hws-cursor__next">
    <img src="<?= get_stylesheet_directory_uri() ?>/images/icons/right-arrow-white.svg"/>
  </div>
</div>
<header id="hws-header" class="hws-header<?= $header_transition ? " hws-header--transition" : "" ?>">
  <div class="hws-header__background"></div>
  <?php if ( !$landing_page ): ?>
    <a class="hws-header__menu-button hws--vertical-center" href="#">
      <div class="hws-header__menu-button__icon-box">
        <img src="<?= get_stylesheet_directory_uri() ?>/images/icons/menu-to-close.svg?<?= time() ?>"/>
      </div>
      <span>Menu</span>
    </a>
  <?php endif; ?>
  <<?= $div_type ?> class="hws-header__logo hws--center-abs" href="<?= get_site_url() ?>">
    <img src="<?= get_stylesheet_directory_uri() ?>/images/graphics/logo-header.svg"/>
  </<?= $div_type ?>>
  <?php if ( !$landing_page ): ?>
    <a class="hws-header__start-today hws--vertical-center" href="<?=  $general_consultation_link ?>" target="_blank">
      <div class="hws-header__start-today__icon-box">
        <img src="<?= get_stylesheet_directory_uri() ?>/images/icons/get-started-icon.svg"/>
      </div>
      <span>Start<span class="extra">&nbsp;Today</span></span>
    </a>
  <?php endif; ?>
  <div class="hws-header__line"></div>
</header><!-- #masthead -->
<div class="hws-overlay"></div>
<div id="hws-main-menu" class="hws-main-menu">
  <div id="hws-main-menu__left">
    <div id="hws-main-menu__left__overlay"></div>
    <?php
    $args = array(
      'menu_class' => 'hws-header__nav',        
      'theme_location' => 'header'
    );
    wp_nav_menu( $args ); 
    ?>
  </div>
  <div id="hws-main-menu__right">
  </div>
</div>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'halstead-website-starter' ); ?></a>
