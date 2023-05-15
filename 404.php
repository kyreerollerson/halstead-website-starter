<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Halstead_Website_Starter
 */

get_header();
?>

	<main id="primary" class="site-main">

	  <div class="hws-404 hws-block--padded">
      <div class="hws-container--large">
        <div class="hws--vertical-center">
          <h1>404</h1>
          <h2>Page not found</h2>
          <p>We are unable to find the page you're looking for. Alas.</p>
          <div class="hws-404__button-container">
            <a href="<?= get_site_url() ?>" class="hws-button hws-button--black"><span>Back to Homepage</span></a>
          </div>
        </div>
      </div>
    </div>
	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
