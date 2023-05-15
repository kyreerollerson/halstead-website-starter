<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Halstead_Website_Starter
 */

$hours = get_field( 'hours', 'option' );
$street_address = get_field( 'street_address', 'option' );
$city_state_zip = get_field( 'city_state_zip', 'option' );
$phone_number = get_field( 'phone_number', 'option' );
$phone_number_pure = get_field( 'phone_number_pure', 'option' );
$privacy_policy = get_field( 'privacy_policy', 'option' );
$landing_page = get_field( 'landing_page', $page_id );
$div_type = 'a';
if ($landing_page) {
  $div_type = 'div';
}
?>
</div><!-- #page -->
<!-- #footer -->
<footer id="hws-footer" class="hws-footer">
  <div class="hws-footer__logo-box">
    <<?= $div_type ?> href="<?= get_site_url() ?>"><img src="<?= get_stylesheet_directory_uri() ?>/images/graphics/logo-footer.svg" alt="Halstead Websites"/></<?= $div_type ?>>
  </div>
  <div class="hws-footer__columns">
    <div class="hws-container--large">
      <div class="hws-footer__columns__single">
        <h3>Our Hours Are</h3>
        <p>
          <?php foreach( $hours as $hour ): ?>
            <span><?= $hour['line'] ?></span>
          <?php endforeach; ?>
        </p>
      </div>
      <div class="hws-footer__columns__single">
        <h3>Visit Us At</h3>
        <p>
          <span><?= $street_address ?></span>
          <span><?= $city_state_zip ?></span>
        </p>
      </div>
      <div class="hws-footer__columns__single">
        <h3>Call Or Text</h3>
        <p>
          <a href="tel:<?= $phone_number_pure ?>">
            <?= $phone_number ?>
          </a>
        </p>
      </div>
    </div>
  </div>
  <div class="hws-footer__copyright">
    Copyright &copy; <?= date('Y'); ?> Lion Fitness Solutions LLC. All rights reserved. <a href="<?= $privacy_policy ?>">Privacy Policy.</a>
    <a class="hws-footer__copyright__colophon" href="http://kysites.com" target="_blank">
      <img src="<?= get_stylesheet_directory_uri() ?>/images/graphics/kysites-colophon.svg"/>
    </a>
  </div>
</footer><!-- #footer -->
<!-- gpdr -->
<div class="hws-gpdr">
  <div class="hws-container--large">
    <p>Lion uses cookies on our website. By continuing to use this website, you consent to the storing and accessing of cookies on your device in accordance with our <a href="<?= $privacy_policy ?>">Privacy Policy</a>.</p>
    <p>
      <a href="#" class="hws-button hws-button--white hws-button--small">
        OK, I understand
      </a>
    </p>
  </div>
</div> <!-- /gpdr -->

<?php wp_footer(); ?>

</body>
</html>
