<?php

require_once get_template_directory() . '/inc/PostTypes/function.php';
require_once get_template_directory() . '/inc/PostStyle/function.php';

add_filter( 'deprecated_constructor_trigger_error', '__return_false' );

require_once( get_template_directory() . '/inc/ThemeOptions/options-page.php' );

if ( ! file_exists( get_template_directory() . '/bootstrap-walker.php' ) ) {
    // File does not exist... return an error.
    return new WP_Error( 'wp-bootstrap-navwalker-missing', __( 'It appears the bootstrap-walker.php file may be missing.', 'wp-bootstrap-navwalker' ) );
} else {
    // File exists... require it.
    require_once get_template_directory() . '/bootstrap-walker.php';
}

require_once get_template_directory().'/inc/enqueue.php';


require_once get_template_directory().'/inc/theme-support.php';

if ( file_exists( STYLESHEETPATH . '/inc/private/functions.content.limit.php' ) ) {
    require_once( STYLESHEETPATH . '/inc/private/functions.content.limit.php' );
}

if ( file_exists( STYLESHEETPATH . '/components/function.php' ) ) {
    require_once( STYLESHEETPATH . '/components/function.php' );
}

if ( file_exists( STYLESHEETPATH . '/inc/private/function.php' ) ) {
    require_once( STYLESHEETPATH . '/inc/private/function.php' );
}


if ( file_exists( STYLESHEETPATH . '/inc/plugin/function.php' ) ) {
    require_once (get_template_directory().'/inc/plugin/function.php');
}
