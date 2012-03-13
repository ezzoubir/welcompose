<?php

/**
 * Project: Welcompose
 * File: pages_events_postings_select.php
 *
 * Copyright (c) 2008-2012 creatics, Olaf Gleba <og@welcompose.de>
 *
 * Project owner:
 * creatics, Olaf Gleba
 * 50939 Köln, Germany
 * http://www.creatics.de
 *
 * This file is licensed under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE v3
 * http://www.opensource.org/licenses/agpl-v3.html
 * 
 * @author Olaf Gleba
 * @package Welcompose
 * @link http://welcompose.de
 * @license http://www.opensource.org/licenses/agpl-v3.html GNU AFFERO GENERAL PUBLIC LICENSE v3
 */

// define area constant
define('WCOM_CURRENT_AREA', 'ADMIN');

// get loader
$path_parts = array(
	dirname(__FILE__),
	'..',
	'..',
	'core',
	'loader.php'
);
$loader_path = implode(DIRECTORY_SEPARATOR, $path_parts);
require($loader_path);

// start base
/* @var $BASE base */
$BASE = load('base:base');

// deregister globals
$deregister_globals_path = dirname(__FILE__).'/../../core/includes/deregister_globals.inc.php';
require(Base_Compat::fixDirectorySeparator($deregister_globals_path));

// admin_navigation
$admin_navigation_path = dirname(__FILE__).'/../../core/includes/admin_navigation.inc.php';
require(Base_Compat::fixDirectorySeparator($admin_navigation_path));

try {
	// start output buffering
	@ob_start();
	
	// load smarty
	$smarty_admin_conf = dirname(__FILE__).'/../../core/conf/smarty_admin.inc.php';
	$BASE->utility->loadSmarty(Base_Compat::fixDirectorySeparator($smarty_admin_conf), true);
	
	// load gettext
	$gettext_path = dirname(__FILE__).'/../../core/includes/gettext.inc.php';
	include(Base_Compat::fixDirectorySeparator($gettext_path));
	gettextInitSoftware($BASE->_conf['locales']['all']);
	
	// start session
	/* @var $SESSION session */
	$SESSION = load('base:session');

	// load user class
	/* @var $USER User_User */
	$USER = load('user:user');
	
	// load login class
	/* @var $LOGIN User_Login */
	$LOGIN = load('User:Login');
	
	// load project class
	/* @var $PROJECT Application_Project */
	$PROJECT = load('application:project');
	
	// load page class
	/* @var $PAGE Content_Page */
	$PAGE = load('content:page');

	// load eventposting class
	/* @var $EVENTPOSTING Content_Blogposting */
	$EVENTPOSTING = load('content:eventposting');
	
	// load helper class
	/* @var $HELPER Utility_Helper */
	$HELPER = load('utility:helper');
	
	// init user and project
	if (!$LOGIN->loggedIntoAdmin()) {
		header("Location: ../login.php");
		exit;
	}
	$USER->initUserAdmin();
	$PROJECT->initProjectAdmin(WCOM_CURRENT_USER);
	
	// check access
	if (!wcom_check_access('Content', 'EventPosting', 'Manage')) {
		throw new Exception("Access denied");
	}
	
	// assign current user values
	$_wcom_current_user = $USER->selectUser(WCOM_CURRENT_USER);
	$BASE->utility->smarty->assign('_wcom_current_user', $_wcom_current_user);
	
	// make sure, that the page parameter is present
	if (is_null(Base_Cnc::filterRequest($_REQUEST['page'], WCOM_REGEX_NUMERIC))) {
		header("Location: pages_select.php");
		exit;
	}
	
	// assign paths
	$BASE->utility->smarty->assign('wcom_admin_root_www',
		$BASE->_conf['path']['wcom_admin_root_www']);
	
	// assign current user and project id
	$BASE->utility->smarty->assign('wcom_current_user', WCOM_CURRENT_USER);
	$BASE->utility->smarty->assign('wcom_current_project', WCOM_CURRENT_PROJECT);
	
	// select available projects
	$select_params = array(
		'user' => WCOM_CURRENT_USER,
		'order_macro' => 'NAME'
	);
	$BASE->utility->smarty->assign('projects', $PROJECT->selectProjects($select_params));
	
	// get page
	$page = $PAGE->selectPage(Base_Cnc::filterRequest($_REQUEST['page'], WCOM_REGEX_NUMERIC));
	$BASE->utility->smarty->assign('page', $page);
	
	// get blog postings
	$event_postings = $EVENTPOSTING->selectEventPostings(array(
		'page' => Base_Cnc::filterRequest($_REQUEST['page'], WCOM_REGEX_NUMERIC),
		'timeframe' => Base_Cnc::filterRequest($_REQUEST['timeframe'], WCOM_REGEX_TIMEFRAME),
		'draft' => Base_Cnc::filterRequest($_REQUEST['draft_filter'], WCOM_REGEX_NUMERIC),
		'start' => Base_Cnc::filterRequest($_REQUEST['start'], WCOM_REGEX_NUMERIC),
		'limit' => (!empty($_REQUEST['limit'])) ? $_REQUEST['limit'] : 20,
		'order_macro' => (!empty($_REQUEST['macro'])) ? $_REQUEST['macro'] : 'DATE_ADDED:DESC',
		'search_name' => Base_Cnc::filterRequest($_REQUEST['search_name'], WCOM_REGEX_SEARCH_NAME)
	));
	$BASE->utility->smarty->assign('event_postings', $event_postings);
	
	// count available blog postings
	$select_params = array(
		'page' => Base_Cnc::filterRequest($_REQUEST['page'], WCOM_REGEX_NUMERIC),
		'timeframe' => Base_Cnc::filterRequest($_REQUEST['timeframe'], WCOM_REGEX_TIMEFRAME),
		'draft' => Base_Cnc::filterRequest($_REQUEST['draft_filter'], WCOM_REGEX_NUMERIC),
		'search_name' => Base_Cnc::filterRequest($_REQUEST['search_name'], WCOM_REGEX_SEARCH_NAME)
	);
	$posting_count = $EVENTPOSTING->countEventPostings($select_params);
	$BASE->utility->smarty->assign('posting_count', $posting_count);
	
	// count total amount of blog postings
	$select_params = array(
		'page' => Base_Cnc::filterRequest($_REQUEST['page'], WCOM_REGEX_NUMERIC),
		'timeframe' => Base_Cnc::filterRequest($_REQUEST['timeframe'], WCOM_REGEX_TIMEFRAME),
		'draft' => Base_Cnc::filterRequest($_REQUEST['draft_filter'], WCOM_REGEX_NUMERIC),
		'search_name' => Base_Cnc::filterRequest($_REQUEST['search_name'], WCOM_REGEX_SEARCH_NAME)
	);
	$total_posting_count = $EVENTPOSTING->countEventPostings($select_params);
	$BASE->utility->smarty->assign('total_posting_count', $total_posting_count);
	
	// prepare and assign page index
	$BASE->utility->smarty->assign('page_index', $HELPER->calculatePageIndex($posting_count, (!empty($_REQUEST['limit'])) ? $_REQUEST['limit'] : 20));
	
	// get and assign timeframes
	$BASE->utility->smarty->assign('timeframes', $HELPER->getTimeframes());
	
	// import and assign request params
	$request = array(
		'timeframe' => Base_Cnc::filterRequest($_REQUEST['timeframe'], WCOM_REGEX_TIMEFRAME),
		'draft_filter' => Base_Cnc::filterRequest($_REQUEST['draft_filter'], WCOM_REGEX_NUMERIC),
		'start' => Base_Cnc::filterRequest($_REQUEST['start'], WCOM_REGEX_NUMERIC),
		'limit' => Base_Cnc::filterRequest($_REQUEST['limit'], WCOM_REGEX_NUMERIC),
		'macro' => Base_Cnc::filterRequest($_REQUEST['macro'], WCOM_REGEX_ORDER_MACRO),
		'search_name' => Base_Cnc::filterRequest($_REQUEST['search_name'], WCOM_REGEX_SEARCH_NAME)
	);
	$BASE->utility->smarty->assign('request', $request);
	
	// display the page
	define("WCOM_TEMPLATE_KEY", md5($_SERVER['REQUEST_URI']));
	$BASE->utility->smarty->display('content/pages_events_postings_select.html', WCOM_TEMPLATE_KEY);
		
	// flush the buffer
	@ob_end_flush();
	exit;

} catch (Exception $e) {
	// clean buffer
	if (!$BASE->debug_enabled()) {
		@ob_end_clean();
	}
	
	// raise error
	$BASE->error->displayException($e, $BASE->utility->smarty);
	$BASE->error->triggerException($e);
	
	// exit
	exit;
}
?>