<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
if (file_exists(dirname(__FILE__) . '/local.php')) {
	define( 'DB_NAME', 'local' );
	define( 'DB_USER', 'root' );
	define( 'DB_PASSWORD', 'root' );
	define( 'DB_HOST', 'localhost' );
} else {
	define( 'DB_NAME', 'markussi_db' );
	define( 'DB_USER', 'markussi_user' );
	define( 'DB_PASSWORD', 'markuswebsite' );
	define( 'DB_HOST', '10.169.0.186' );
}


/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'lqYYRMFNIvroW4MIalHrxN5fPych2efgYksG5UEg1rvSW4sJCFQfpbyp7+xlj6yPx1J4nKDZA1jWI9ZhPL95hg==');
define('SECURE_AUTH_KEY',  'WXc2yjV3e8+aKtEUOHFQ+NJVpCn6jQQR/aWGmJn8AgpPvg84aN0ajpTewv4/p2hHINpqyldq68cO9GB+mVZvag==');
define('LOGGED_IN_KEY',    'auKBmCFXhKrywoxcQa01sg4vIpzLUTyqaWoBR0Bdq/eEPtWLfi0bMEEqX/gxVYLDBT/L0rIS2joJ+Q06cYi3LA==');
define('NONCE_KEY',        'e4CWPYTMVsD/GQCsfJzpI1a187Sk+IUyM5Ccya1dDJnt6JC7JXLUjWWm+5BCWuLRJdB23j4qGzVD9l/S8aAPfA==');
define('AUTH_SALT',        'IL7milHF+dSPq05u4OgVkqQIyygsTi0ppMLmQMUkBCridBopEocnymf5ea4pv5A+YIakMMpam0UumaOWl5ZRtg==');
define('SECURE_AUTH_SALT', '7U4KSj8kmEImQDt2t2kHGmZATacpTj7jryFE3yiyc2M3ixc+qXhwU3k1pcAV4pO7bcqvtpyBJyZiqEhhrMa/6g==');
define('LOGGED_IN_SALT',   'fREO8mGoQBY6nU8Gv2DJWZPZy13U/ILywPl+iVZXVEPARmxexwSxh9DcAJ7ULlXUuXuw4CJBQihgbf1rO5TJFQ==');
define('NONCE_SALT',       'ElZOxrX55MqcnxXyPsQuhfxqPu5cJC8iKNoJwRw0tDbR71VftQO6vjCAladIBhA266Or154eoCaMx7Vqx38rLA==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';





/* Inserted by Local by Flywheel. See: http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy */
if ( isset( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https' ) {
	$_SERVER['HTTPS'] = 'on';
}

/* Inserted by Local by Flywheel. Fixes $is_nginx global for rewrites. */
if ( ! empty( $_SERVER['SERVER_SOFTWARE'] ) && strpos( $_SERVER['SERVER_SOFTWARE'], 'Flywheel/' ) !== false ) {
	$_SERVER['SERVER_SOFTWARE'] = 'nginx/1.10.1';
}
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
