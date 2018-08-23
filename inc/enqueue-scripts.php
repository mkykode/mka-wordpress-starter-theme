<?php
/**
 * Enqueues styles and scripts.
 *
 * @package Scripts
 */

add_action(
    'wp_enqueue_scripts', function () {

        wp_enqueue_style( 'monkey-style', monkey_get_assets_folder() . '/styles/main.css' );

        wp_enqueue_script( 'main-js', monkey_get_assets_folder() . '/scripts/main.js', array(), '1.0.0', true );

        // wp_enqueue_script( 'monkey-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
        // if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        // wp_enqueue_script( 'comment-reply' );
        // }
    }
);
