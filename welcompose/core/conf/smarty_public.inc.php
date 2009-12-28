<?php

/**
 * Project: Welcompose
 * File: smarty_public.inc.php
 * 
 * Copyright (c) 2008 creatics
 * 
 * Project owner:
 * creatics, Olaf Gleba
 * 50939 Köln, Germany
 * http://www.creatics.de
 *
 * This file is licensed under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE v3
 * http://www.opensource.org/licenses/agpl-v3.html
 * 
 * $Id$
 * 
 * @copyright 2008 creatics, Olaf Gleba
 * @author Andreas Ahlenstorf
 * @package Welcompose
 * @license http://www.opensource.org/licenses/agpl-v3.html GNU AFFERO GENERAL PUBLIC LICENSE v3
 */

/**
 * Whitelist for select plugins. Prevents undesired execution of
 * internal functions/methods. Takes the namespace name as first
 * argument, the class name as second argument and the method name
 * as third argument. These will be tested against the whitelist
 * patterns defined within the function. Returns true if the
 * argument combination passed the whitelist.
 * 
 * @param string Namespace name
 * @param string Class name
 * @param string Method name
 * @param bool 
 */
function wcom_smarty_select_whitelist ($ns, $class, $method)
{
	// configure white list
	$whitelist = array(
		array(
			'namespaces' => '=^(.*)$=',
			'classes' => '=^(.*)$=',
			'methods' => '=^(select|count)([a-z]+)$=i'
		)
	);
	
	foreach ($whitelist as $_entry) {
		if (preg_match($_entry['namespaces'], $ns) && preg_match($_entry['classes'], $class)
		&& preg_match($_entry['methods'], $method)) {
			return true;
		}
	}
	
	return false;
}

// define constants
if (!defined('SMARTY_DIR')) {
	define('SMARTY_DIR', dirname(__FILE__).'/smarty/');
}
if (!defined('SMARTY_TPL_DIR')) {
	define('SMARTY_TPL_DIR', realpath(dirname(__FILE__).'/../../smarty/'));
}

// load the wcom resource plugins
require_once(SMARTY_DIR.'software_extensions/resource.wcom.php');
$resource_functions = array(
	"wcomresource_FetchTemplate",
	"wcomresource_FetchTimestamp",
	"wcomresource_isSecure",
	"wcomresource_isTrusted"
);
$smarty->register_resource("wcom", $resource_functions);
unset($resource_functions);

require_once(SMARTY_DIR.'software_extensions/resource.wcomgtpl.php');
$resource_functions = array(
	"wcomgtplresource_FetchTemplate",
	"wcomgtplresource_FetchTimestamp",
	"wcomgtplresource_isSecure",
	"wcomgtplresource_isTrusted"
);
$smarty->register_resource("wcomgtpl", $resource_functions);
unset($resource_functions);

// configure smarty
$smarty->template_dir = SMARTY_TPL_DIR.'/templates';
$smarty->compile_dir = SMARTY_TPL_DIR.'/compiled';
$smarty->cache_dir = SMARTY_TPL_DIR.'/cache';
$smarty->plugins_dir = array(
	SMARTY_DIR.'my_plugins',
	SMARTY_DIR.'plugins',
	SMARTY_DIR.'software_plugins'
);

?>
