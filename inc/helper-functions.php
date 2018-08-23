<?php
/**
 * Helper Functions
 *
 * @package Helper
 */

/**
 * Get assets folder 'dist'.
 *
 * @return string
 */
function monkey_get_assets_folder() {
    return get_template_directory_uri() . '/dist';
}
