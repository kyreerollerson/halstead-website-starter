<?php
/**
 * Halstead Website Starter functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Halstead_Website_Starter
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function halstead_website_starter_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on Halstead Website Starter, use a find and replace
		* to change 'halstead-website-starter' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'halstead-website-starter', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'header' => esc_html__( 'Header', 'halstead-website-starter' ),
      'footer-col-1' => esc_html__( 'Footer Col. 1', 'halstead-website-starter' ),
      'footer-col-2' => esc_html__( 'Footer Col. 2', 'halstead-website-starter' ),
      'footer-col-3' => esc_html__( 'Footer Col. 3', 'halstead-website-starter' ),
      'footer-col-4' => esc_html__( 'Footer Col. 4', 'halstead-website-starter' ),
    )
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'halstead_website_starter_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'halstead_website_starter_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function halstead_website_starter_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'halstead_website_starter_content_width', 640 );
}
add_action( 'after_setup_theme', 'halstead_website_starter_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function halstead_website_starter_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'halstead-website-starter' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'halstead-website-starter' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'halstead_website_starter_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function halstead_website_starter_scripts() {

  wp_enqueue_style( 'halstead-website-starter-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'halstead-website-starter-style', 'rtl', 'replace' );


  // wp_enqueue_script( 
  //   'recaptcha', 
  //   'https://www.google.com/recaptcha/api.js?render=' . RECAPTCHA_SITE_KEY, 
  //   array(),
  //   '3.0.0'
  // );


  wp_enqueue_script( 
    'anime', 
    'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js', 
    array(),
    '3.2.0'
  );

  wp_enqueue_script( 
    'jquery-waypoints', 
    get_template_directory_uri() . '/js/jquery.waypoints.min.js', 
    array('jquery'),
    '4.0.1'
  );

  wp_enqueue_script( 
    'smooth-scroll', 
    get_template_directory_uri() . '/js/smooth-scroll.js', 
    array(),
    '16.1.4'
  );

  wp_enqueue_script( 
    'slick', 
    get_template_directory_uri() . '/js/slick.min.js', 
    array(),
    '1.8.1'
  );

  wp_enqueue_script( 
    'moment', 
    get_template_directory_uri() . '/js/moment.min.js', 
    array(),
    '3.0.4'
  );

  wp_enqueue_script( 
    'vue', 
    get_template_directory_uri() . '/js/vue.min.js', 
    array(),
    '2.7.14'
  );

  wp_enqueue_script( 
    'quiz', 
    get_template_directory_uri() . '/js/quiz.js', 
    array(
      'jquery',
      'vue'
    ),
    '1.0.0',
    true
  );


  wp_enqueue_style( 
    'animate', 
    get_template_directory_uri() . '/css/animate.css', 
    array(),
    '4.1.1'
  );

  wp_enqueue_style( 
    'halstead-website-starter-app', 
    get_template_directory_uri() . '/build/app.css', 
    array(
      'halstead-website-starter-style',
      'animate'
    ),
    _S_VERSION 
  );

  wp_enqueue_script( 
    'halstead-website-starter-app', 
    get_template_directory_uri() . '/build/app.js', 
    array(
      'jquery',
      'anime',
      'slick',
      'jquery-waypoints',
      'vue'
      // 'recaptcha'
    ),
    time() 
  );

  $wp_vars = array(
    'ajax_url' => admin_url( 'admin-ajax.php' ) ,
    'template_uri' => get_template_directory_uri(),
    'site_url' => get_site_url()
  );

  wp_localize_script( 'halstead-website-starter-app', 'wp_vars', $wp_vars );
  wp_localize_script( 'quiz', 'wp_vars', $wp_vars );
}
add_action( 'wp_enqueue_scripts', 'halstead_website_starter_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * All ajax functions.
 */
require get_template_directory() . '/inc/ajax.php';

/**
 * All blocks.
 */
require get_template_directory() . '/inc/blocks.php';

/**
 * All generators.
 */
require get_template_directory() . '/inc/generators.php';
