<?php 
    function custom_post_types () {
        register_post_type('Music', array(
            'supports' => array('title', 'thumbnail'),
            'rewrite' => array('slug' => 'Music'),
            'public' => true,
            'menu_icon' => 'dashicons-format-audio',
            'labels' => array(
            'name' => 'Music',
            'add_new_item' => 'Add New Song',
            'edit_item' => 'Edit Song',
            'all_items' => 'All Songs',
            'singular_name' => 'Song'
            )
        ));

        register_post_type('Video', array(
            'supports' => array('title', 'thumbnail'),
            'rewrite' => array('slug' => 'Video'),
            'public' => true,
            'menu_icon' => 'dashicons-video-alt3',
            'labels' => array(
            'name' => 'Video',
            'add_new_item' => 'Add New Video',
            'edit_item' => 'Edit Video',
            'all_items' => 'All Video',
            'singular_name' => 'Video'
            )
        ));
    };

    add_action('init', 'custom_post_types');

?>