<?php 

function website_styles() {
    wp_enqueue_style('secondary-font', '//fonts.googleapis.com/css?family=Nothing+You+Could+Do|Roboto+Condensed');
    wp_enqueue_style('font-awesome', '//use.fontawesome.com/releases/v5.0.12/css/all.css');
    wp_enqueue_style('featherlight', '//cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.min.css');
    wp_enqueue_style('fullpage', '//cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.5/fullpage.min.css');
    wp_enqueue_style('website_main_styles', get_template_directory_uri() . '/dist/css/main.css', NULL, microtime());  
}

function website_scripts(){
    wp_enqueue_script('easing', '//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js', array('jquery'));
    wp_enqueue_script('fullpage', '//cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.5/fullpage.min.js');
    wp_enqueue_script('overflow', '//cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.5/vendors/scrolloverflow.js');
    wp_enqueue_script('featherlight', '//cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.min.js', array('jquery'));
    wp_enqueue_script('amplitude', '//cdn.jsdelivr.net/npm/amplitudejs@v3.3.0/dist/amplitude.js');
    wp_enqueue_script('website_main_js', get_template_directory_uri() . '/dist/js/main.js', array('jquery') , microtime());
}

add_action('wp_enqueue_scripts', 'website_styles');
add_action('wp_enqueue_scripts', 'website_scripts');
add_theme_support( 'post-thumbnails' ); 
?>