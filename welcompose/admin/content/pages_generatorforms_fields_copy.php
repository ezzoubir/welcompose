<?php

/**
 * Project: Welcompose
 * File: pages_generatorforms_fields_edit.php
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
	
	// load Content_GeneratorFormField class
	$GENERATORFORMFIELD = load('Content:GeneratorFormField');
	
	// load helper class
	/* @var $HELPER Utility_Helper */
	$HELPER = load('Utility:Helper');
	
	// init user and project
	if (!$LOGIN->loggedIntoAdmin()) {
		header("Location: ../login.php");
		exit;
	}
	$USER->initUserAdmin();
	$PROJECT->initProjectAdmin(WCOM_CURRENT_USER);
	
	// check access
	if (!wcom_check_access('Content', 'GeneratorFormField', 'Manage')) {
		throw new Exception("Access denied");
	}
	
	// assign current user values
	$_wcom_current_user = $USER->selectUser(WCOM_CURRENT_USER);
	$BASE->utility->smarty->assign('_wcom_current_user', $_wcom_current_user);
	
	// get page
	$page = $PAGE->selectPage(Base_Cnc::filterRequest($_REQUEST['page'], WCOM_REGEX_NUMERIC));
	
	// get form field
	$form_field = $GENERATORFORMFIELD->selectGeneratorFormField(Base_Cnc::filterRequest($_REQUEST['id'],
		WCOM_REGEX_NUMERIC));
	
	// start new HTML_QuickForm
	$FORM = $BASE->utility->loadQuickForm('generator_form_field', 'post');
	$FORM->registerRule('testForNameUniqueness', 'callback', 'testForUniqueName', $GENERATORFORMFIELD);
		
	// hidden for id
	$FORM->addElement('hidden', 'id');
	$FORM->applyFilter('id', 'trim');
	$FORM->applyFilter('id', 'strip_tags');
	$FORM->addRule('id', gettext('Id is not expected to be empty'), 'required');
	$FORM->addRule('id', gettext('Id is expected to be numeric'), 'numeric');
	
	// hidden for page
	$FORM->addElement('hidden', 'page');
	$FORM->applyFilter('page', 'trim');
	$FORM->applyFilter('page', 'strip_tags');
	$FORM->addRule('page', gettext('Page is not expected to be empty'), 'required');
	$FORM->addRule('page', gettext('Page is expected to be numeric'), 'numeric');
	
	// hidden for start
	$FORM->addElement('hidden', 'start');
	$FORM->applyFilter('start', 'trim');
	$FORM->applyFilter('start', 'strip_tags');
	$FORM->addRule('start', gettext('start is expected to be numeric'), 'numeric');
	
	// hidden for limit
	$FORM->addElement('hidden', 'limit');
	$FORM->applyFilter('limit', 'trim');
	$FORM->applyFilter('limit', 'strip_tags');
	$FORM->addRule('limit', gettext('limit is expected to be numeric'), 'numeric');
	
	// hidden for macro
	$FORM->addElement('hidden', 'macro');
	$FORM->applyFilter('macro', 'trim');
	
	// select for type
	$FORM->addElement('select', 'type', gettext('Type'), $GENERATORFORMFIELD->getTypeListForForm(),
		array('id' => 'generator_form_field_type'));
	$FORM->applyFilter('type', 'trim');
	$FORM->applyFilter('type', 'strip_tags');
	$FORM->addRule('type', gettext('Select a field type'), 'required');
	$FORM->addRule('type', gettext('Selected field type is out of range'), 'in_array_keys',
		$GENERATORFORMFIELD->getTypeListForForm());
	
	// textfield for label
	$FORM->addElement('text', 'label', gettext('Label'),
		array('id' => 'generator_form_field_label', 'maxlength' => 255, 'class' => 'w300'));
	$FORM->applyFilter('label', 'trim');
	$FORM->applyFilter('label', 'strip_tags');
	
	// textfield for name
	$FORM->addElement('text', 'name', gettext('Name'),
		array('id' => 'generator_form_field_name', 'maxlength' => 255, 'class' => 'w300 validate'));
	$FORM->applyFilter('name', 'trim');
	$FORM->applyFilter('name', 'strip_tags');
	$FORM->addRule('name', gettext('Please enter a field name'), 'required');
	$FORM->addRule('name', gettext('Only alphanumeric field names are allowed'), 'regex',
		WCOM_REGEX_OPERATOR_NAME);
	$FORM->addRule('name', gettext('A form field with the given name already exists'),
		'testForNameUniqueness', array('form' => $FORM->exportValue('page'),
		'id' => $FORM->exportValue('id')));
	
	// textarea for value
	$FORM->addElement('textarea', 'value', gettext('Value'),
		array('id' => 'generator_form_field_value', 'cols' => 3, 'rows' => '2', 'class' => 'w540h150'));
	$FORM->applyFilter('value', 'trim');
	$FORM->applyFilter('value', 'strip_tags');
	
	// textfield for class
	$FORM->addElement('text', 'class', gettext('CSS class'),
		array('id' => 'generator_form_field_class', 'maxlength' => 255, 'class' => 'w300 validate'));
	$FORM->applyFilter('class', 'trim');
	$FORM->applyFilter('class', 'strip_tags');
	
	// checkbox for required
	$FORM->addElement('checkbox', 'required', gettext('Required'), null,
		array('id' => 'generator_form_field_required', 'class' => 'chbx'));
	$FORM->applyFilter('required', 'trim');
	$FORM->applyFilter('required', 'strip_tags');
	$FORM->addRule('required', gettext('The field required accepts only 0 or 1'),
		'regex', WCOM_REGEX_ZERO_OR_ONE);
	
	// textfield for message
	$FORM->addElement('text', 'required_message', gettext('Required message'),
		array('id' => 'generator_form_field_required_message', 'maxlength' => 255, 'class' => 'w300'));
	$FORM->applyFilter('message', 'trim');
	$FORM->applyFilter('message', 'strip_tags');
	if ($FORM->exportValue('required') == 1) {
		$FORM->addRule('required_message', gettext('Please enter a required message'), 'required');
	}
	
	// textfield for regular_expression
	$FORM->addElement('text', 'validator_regex', gettext('Regular expression'),
		array('id' => 'generator_form_field_validator_regex', 'maxlength' => 255, 'class' => 'w300'));
	$FORM->applyFilter('validator_regex', 'trim');
	$FORM->applyFilter('validator_regex', 'strip_tags');
	
	// textfield for message
	$FORM->addElement('text', 'validator_message', gettext('Validator message'),
		array('id' => 'generator_form_field_validator_message', 'maxlength' => 255, 'class' => 'w300'));
	$FORM->applyFilter('validator_message', 'trim');
	$FORM->applyFilter('validator_message', 'strip_tags');
	if ($FORM->exportValue('validator_regex') == 1) {
		$FORM->addRule('validator_message', gettext('Please enter a validator message'), 'required');
	}
	
	// submit button
	$FORM->addElement('submit', 'save', gettext('Duplicate Form Field'),
		array('class' => 'submit200'));
	
	// set defaults
	$FORM->setDefaults(array(
		'id' => Base_Cnc::ifsetor($form_field['id'], null),
		'page' => Base_Cnc::ifsetor($form_field['form'], null),
		'start' => Base_Cnc::filterRequest($_REQUEST['start'], WCOM_REGEX_NUMERIC),
		'limit' => Base_Cnc::filterRequest($_REQUEST['limit'], WCOM_REGEX_NUMERIC),
		'macro' => Base_Cnc::filterRequest($_REQUEST['macro'], WCOM_REGEX_ORDER_MACRO),
		'type' => Base_Cnc::ifsetor($form_field['type'], null),
		'label' => Base_Cnc::ifsetor($form_field['label'], null),
		'name' => Base_Cnc::ifsetor($form_field['name'], null),
		'value' => Base_Cnc::ifsetor($form_field['value'], null),
		'class' => Base_Cnc::ifsetor($form_field['class'], null),
		'required' => Base_Cnc::ifsetor($form_field['required'], null),
		'required_message' => Base_Cnc::ifsetor($form_field['required_message'], null),
		'validator_regex' => Base_Cnc::ifsetor($form_field['validator_regex'], null),
		'validator_message' => Base_Cnc::ifsetor($form_field['validator_message'], null)
	));
	
	// validate it
	if (!$FORM->validate()) {
		// render it
		$renderer = $BASE->utility->loadQuickFormSmartyRenderer();
		$quickform_tpl_path = dirname(__FILE__).'/../quickform.tpl.php';
		include(Base_Compat::fixDirectorySeparator($quickform_tpl_path));
		
		// remove attribute on form tag for XHTML compliance
		$FORM->removeAttribute('name');
		$FORM->removeAttribute('target');
		
		$FORM->accept($renderer);
	
		// assign the form to smarty
		$BASE->utility->smarty->assign('form', $renderer->toArray());
		
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
		
		// assign page
		$BASE->utility->smarty->assign('page', $page);
		
		// display the form
		define("WCOM_TEMPLATE_KEY", md5($_SERVER['REQUEST_URI']));
		$BASE->utility->smarty->display('content/pages_generatorforms_fields_edit.html', WCOM_TEMPLATE_KEY);
		
		// flush the buffer
		@ob_end_flush();
		
		exit;
	} else {
		// freeze the form
		$FORM->freeze();
		
		// prepare sql data
		$sqlData = array();
		$sqlData['form'] = $FORM->exportValue('page');
		$sqlData['type'] = $FORM->exportValue('type');
		$sqlData['label'] = $FORM->exportValue('label');
		$sqlData['name'] = $FORM->exportValue('name');
		$sqlData['value'] = $FORM->exportValue('value');
		$sqlData['class'] = $FORM->exportValue('class');
		$sqlData['required'] = (string)intval($FORM->exportValue('required'));
		$sqlData['required_message'] = $FORM->exportValue('required_message');
		$sqlData['validator_regex'] = $FORM->exportValue('validator_regex');
		$sqlData['validator_message'] = $FORM->exportValue('validator_message');
		
		// test sql data for pear errors
		$HELPER->testSqlDataForPearErrors($sqlData);
		
		// insert it
		try {
			// begin transaction
			$BASE->db->begin();
			
			// execute operation
			$GENERATORFORMFIELD->addGeneratorFormField($sqlData);
			
			// commit
			$BASE->db->commit();
		} catch (Exception $e) {
			// do rollback
			$BASE->db->rollback();
			
			// re-throw exception
			throw $e;
		}
		
		// clean the buffer
		if (!$BASE->debug_enabled()) {
			@ob_end_clean();
		}
		
		// save request params 
		$start = $FORM->exportValue('start');
		$limit = $FORM->exportValue('limit');
		$macro = $FORM->exportValue('macro');
		
		// append request params
		$redirect_params = (!empty($start)) ? '&start='.$start : '';
		$redirect_params .= (!empty($limit)) ? '&limit='.$limit : '&limit=20';
		$redirect_params .= (!empty($macro)) ? '&macro='.$macro : '';
		
		// redirect
		header("Location: pages_generatorforms_fields_select.php?page=".$FORM->exportValue('page').$redirect_params);
		exit;
	}
} catch (Exception $e) {
	// clean the buffer
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