<?php

/**
 * Project: Oak
 * File: pages_links_select.php
 *
 * Copyright (c) 2006 sopic GmbH
 *
 * Project owner:
 * sopic GmbH
 * 8472 Seuzach, Switzerland
 * http://www.sopic.com/
 *
 * This file is licensed under the terms of the Open Software License
 * http://www.opensource.org/licenses/osl-2.1.php
 *
 * $Id: boxes_select.php 308 2006-08-08 12:42:23Z andreas $
 *
 * @copyright 2006 sopic GmbH
 * @author Andreas Ahlenstorf
 * @package Oak
 * @license http://www.opensource.org/licenses/osl-2.1.php Open Software License
 */

// define area constant
define('OAK_CURRENT_AREA', 'ADMIN');

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
	
	// load template class
	/* @var $TEMPLATE Templating_Template */
	$TEMPLATE = load('templating:template');
	
	// load templatetype class
	/* @var $TEMPLATETYPE Templating_Templatetype */
	$TEMPLATETYPE = load('templating:templatetype');
	
	// load templateset class
	/* @var $TEMPLATESET Templating_Templateset */
	$TEMPLATESET = load('templating:templateset');
	
	// load helper class
	/* @var $HELPER Utility_Helper */
	$HELPER = load('utility:helper');
	
	// init user and project
	if (!$LOGIN->loggedIntoAdmin()) {
		header("Location: ../login.php");
		exit;
	}
	$USER->initUserAdmin();
	$PROJECT->initProjectAdmin(OAK_CURRENT_USER);
	
	// assign paths
	$BASE->utility->smarty->assign('oak_admin_root_www',
		$BASE->_conf['path']['oak_admin_root_www']);
	
	// assign current user and project id
	$BASE->utility->smarty->assign('oak_current_user', OAK_CURRENT_USER);
	$BASE->utility->smarty->assign('oak_current_project', OAK_CURRENT_PROJECT);

	
	// assign target field identifier
	$BASE->utility->smarty->assign('target', Base_Cnc::filterRequest($_REQUEST['target'], OAK_REGEX_CSS_IDENTIFIER));
	
	// assign delimiter field value
	$BASE->utility->smarty->assign('delimiter', Base_Cnc::filterRequest($_REQUEST['delimiter'], OAK_REGEX_NUMERIC));
	
	// prepare template key
	define("OAK_TEMPLATE_KEY", md5($_SERVER['REQUEST_URI']));
	$BASE->utility->smarty->display('templating/globaltemplates_links_select.html', OAK_TEMPLATE_KEY);
/*	
	// display template depending on the selection level
	if (empty($_REQUEST['nextNode'])) {
		
		// select available navigations
		$navigations = $NAVIGATION->selectNavigations();
		$BASE->utility->smarty->assign('navigations', $navigations);

		// get pages
		$page_arrays = array();
		foreach ($navigations as $_navigation) {
			$select_params = array(
				'navigation' => (int)$_navigation['id']
			);
			$page_arrays[$_navigation['id']] = $PAGE->selectPages($select_params);
		}
		$BASE->utility->smarty->assign('page_arrays', $page_arrays);
		
		// display the page
		$BASE->utility->smarty->display('templating/templates_links_select.html', OAK_TEMPLATE_KEY);
		
	} elseif (!empty($_REQUEST['nextNode']) && $_REQUEST['nextNode'] == 'secondNode') {
		// at the moment, we know, that the only page type reaching level 2 or 3 is
		// of type OAK_BLOG. so we can assume working with a page of type OAK_BLOG.
		$page_id = Base_Cnc::filterRequest($_REQUEST['id'], OAK_REGEX_NUMERIC);
		
		// load blog posting class
		$BLOGPOSTING = load('Content:BlogPosting');
		
		// get max. 100 blog postings
		$select_params = array(
			'page' => $page_id,
			'order_macro' => 'DATE_ADDED:DESC',
			'limit' => 100
		);
		$blog_postings = $BLOGPOSTING->selectBlogPostings($select_params);
		$BASE->utility->smarty->assign('blog_postings', $blog_postings);
		
		// assign page id
		$BASE->utility->smarty->assign('page_id', $page_id);
		
		// display the page
		$BASE->utility->smarty->display('content/pages_links_select_second.ajax.html', OAK_TEMPLATE_KEY);
		
	} elseif (!empty($_REQUEST['nextNode']) && $_REQUEST['nextNode'] == 'thirdNode') {
		// at the moment, we know, that the only page type reaching level 2 or 3 is
		// of type OAK_BLOG. so we can assume working with a page of type OAK_BLOG.
		$page_id = Base_Cnc::filterRequest($_REQUEST['id'], OAK_REGEX_NUMERIC);
		
		// load blog posting class
		$BLOGPOSTING = load('Content:BlogPosting');
		
		// get the yearly archives
		$select_params = array(
			'page' => $page_id,
			'order_macro' => 'DATE_ADDED:DESC'
		);
		$yearly_archives = $BLOGPOSTING->selectDifferentYears($select_params);
		$BASE->utility->smarty->assign('yearly_archives', $yearly_archives);
		
		// get monthly archives
		$select_params = array(
			'page' => $page_id,
			'order_macro' => 'DATE_ADDED:DESC'
		);
		$monthly_archives = $BLOGPOSTING->selectDifferentMonths($select_params);
		$BASE->utility->smarty->assign('monthly_archives', $monthly_archives);
		
		// assign page id
		$BASE->utility->smarty->assign('page_id', $page_id);
		
		// display the page
		$BASE->utility->smarty->display('content/pages_links_select_third.ajax.html', OAK_TEMPLATE_KEY);
	}
*/	
	// flush the buffer
	@ob_end_flush();
	exit;

} catch (Exception $e) {
	// clean buffer
	if (!$BASE->debug_enabled()) {
		@ob_end_clean();
	}
	
	// raise error
	Base_Error::triggerException($BASE->utility->smarty, $e);	
	
	// exit
	exit;
}
?>