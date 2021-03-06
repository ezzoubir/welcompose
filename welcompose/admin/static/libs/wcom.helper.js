/**
 * Project: Welcompose
 * File: wcom.helper.js
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

/** 
 * @fileoverview Comprised javascript helper functions.
 * It contains functions that may be used application wide.
 *
 */


/**
 * Constructs the Helper class
 * 
 * @class The Helper class defines a bunch of functions which doesn't 
 * belongs as regards content to just one class. Several functions be in use
 * within every Welcompose class. The scope is application wide.
 *
 * @constructor
 * @throws applyError on exception
 */
function Helper ()
{
	try {
		// no properties		
	} catch (e) {
		_applyError(e);
	}
}

/* Inherit from Base */
Helper.prototype = new Base();


/**
 * Instance Methods from prototype @class Helper
 */
Helper.prototype.launchPopup = Helper_launchPopup;
Helper.prototype.getTextConverterValue = Helper_getTextConverterValue;
Helper.prototype.getSelectionText = Helper_getSelectionText;
Helper.prototype.getDelimiterValue = Helper_getDelimiterValue;
Helper.prototype.getPagerPage = Helper_getPagerPage;
Helper.prototype.getInsertType = Helper_getInsertType;
Helper.prototype.closePopup = Helper_closePopup;
Helper.prototype.closeLinksPopup = Helper_closeLinksPopup;
Helper.prototype.closePopupTrack = Helper_closePopupTrack;
Helper.prototype.closePopupTrackNoAlert = Helper_closePopupTrackNoAlert;
Helper.prototype.lowerOpacity = Helper_lowerOpacity;
Helper.prototype.lowerOpacityOnUpload = Helper_lowerOpacityOnUpload;
Helper.prototype.isBrowser = Helper_isBrowser;
Helper.prototype.defineWindowX = Helper_defineWindowX;
Helper.prototype.defineWindowY = Helper_defineWindowY;
Helper.prototype.definePageY = Helper_definePageY;
Helper.prototype.showNextNode = Helper_showNextNode;
Helper.prototype.showNextNodeBoxes = Helper_showNextNodeBoxes;
Helper.prototype.loaderPagesLinks = Helper_loaderPagesLinks;
Helper.prototype.showResponsePagesSecondLinks = Helper_showResponsePagesSecondLinks;
Helper.prototype.showResponsePagesThirdLinks = Helper_showResponsePagesThirdLinks;
Helper.prototype.insertTagsCallbacks = Helper_insertTagsCallbacks;
Helper.prototype.insertTagsFromPopupCallbacks = Helper_insertTagsFromPopupCallbacks;
Helper.prototype.processCallbacks = Helper_processCallbacks;
Helper.prototype.showResponseProcessCallbacks = Helper_showResponseProcessCallbacks;
Helper.prototype.callbacksInsert = Helper_callbacksInsert;
Helper.prototype.callbacksInsertArray = Helper_callbacksInsertArray;
Helper.prototype.insertContentIntoTextarea = Helper_insertContentIntoTextarea;
Helper.prototype.changeBlogCommentStatus = Helper_changeBlogCommentStatus;
Helper.prototype.loaderChangeBlogCommentStatus = Helper_loaderChangeBlogCommentStatus;
Helper.prototype.showResponseChangeBlogCommentStatus = Helper_showResponseChangeBlogCommentStatus;
Helper.prototype.showFileUploadMessage = Helper_showFileUploadMessage;
Helper.prototype.validate = Helper_validate;
Helper.prototype.confirmDelNavAction = Helper_confirmDelNavAction;
Helper.prototype.confirmDelPageAction = Helper_confirmDelPageAction;
Helper.prototype.confirmDelProjectAction = Helper_confirmDelProjectAction;
Helper.prototype.confirmDelTplTypeAction = Helper_confirmDelTplTypeAction;
Helper.prototype.confirmDelTplSetsAction = Helper_confirmDelTplSetsAction;
Helper.prototype.confirmDelTplGlobalAction = Helper_confirmDelTplGlobalAction;
Helper.prototype.confirmDelTplGlobalfileAction = Helper_confirmDelTplGlobalfileAction;
Helper.prototype.confirmDelAbbreviationAction = Helper_confirmDelAbbreviationAction;
Helper.prototype.confirmDelBlogPostingAction = Helper_confirmDelBlogPostingAction;
Helper.prototype.confirmDelSimpleDateAction = Helper_confirmDelSimpleDateAction;
Helper.prototype.confirmDelEventPostingAction = Helper_confirmDelEventPostingAction;
Helper.prototype.confirmDelUserAction = Helper_confirmDelUserAction;
Helper.prototype.getAttrParentNode = Helper_getAttrParentNode;
Helper.prototype.getAttrParentNodeNextNode = Helper_getAttrParentNodeNextNode;
Helper.prototype.getAttr = Helper_getAttr;
Helper.prototype.getAttrNextSibling = Helper_getAttrNextSibling;
Helper.prototype.getNextSiblingFirstChild = Helper_getNextSiblingFirstChild;
Helper.prototype.getDataParentNode = Helper_getDataParentNode;
Helper.prototype.getParentNodeNextSibling = Helper_getParentNodeNextSibling;
Helper.prototype.getParentNodePreviousSibling = Helper_getParentNodePreviousSibling;
Helper.prototype.convertFieldValuesToValidUrl = Helper_convertFieldValuesToValidUrl;
Helper.prototype.convertSomeFieldValuesToValidUrl = Helper_convertSomeFieldValuesToValidUrl;
Helper.prototype.URLify = Helper_URLify;
Helper.prototype.adoptBox = Helper_adoptBox;
Helper.prototype.loaderAdoptBox = Helper_loaderAdoptBox;
Helper.prototype.showResponseAdoptBox = Helper_showResponseAdoptBox;
Helper.prototype.runAction = Helper_runAction;
Helper.prototype.loaderRunAction = Helper_loaderRunAction;
Helper.prototype.showResponseRunAction = Helper_showResponseRunAction;
Helper.prototype.selAllCheckboxes = Helper_selAllCheckboxes;
Helper.prototype.deselAllCheckboxes = Helper_deselAllCheckboxes;
Helper.prototype.goToPageBox = Helper_goToPageBox;
Helper.prototype.getRelatedPages = Helper_getRelatedPages;
Helper.prototype.showResponseGetRelatedPages = Helper_showResponseGetRelatedPages;
Helper.prototype.getNavigationPages = Helper_getNavigationPages;
Helper.prototype.showResponseGetNavigationPages = Helper_showResponseGetNavigationPages;
Helper.prototype.setPageToReference = Helper_setPageToReference;


/**
 * Launch popup.
 * <br />
 * On the basis of parameter <em>trigger</em> we builds the url string
 * for later use in func <em>window.open</em>.
 * According to the popup launch, the parent window opacity will be lowered
 * to eye focus onto the launched window. 
 * 
 * <br /><br />Example:
 * <pre><code>
Helper.launchPopup('mm_upload', this);
</code></pre>
 * 
 * @see #lowerOpacity
 * @see #getPagerPage
 * @param {string} trigger Switch case condition which url to use
 * @param {object} elem Current element
 * @throws applyError on exception
 */
function Helper_launchPopup (trigger, elem)
{
	try {
		// properties
		this.elem = elem;
		this.trigger = trigger;
		
		Helper.lowerOpacity();		
		Helper.getPagerPage();
		
		switch (this.trigger) {
			case 'mm_upload' :
					this.url = this.parseMedUploadPath + '?pager_page=' + Helper.getPagerPage();
				break;
			case 'mm_edit' :
					this.url = this.parseMedEditPath + '?id=' + this.elem.id + '&pager_page=' + Helper.getPagerPage();
				break;
		}
		// properties
		this.targetUrl = this.url;
		this.targetName = this.trigger;
		this.targetWidth = this.callbacksPopupWindowWidth745;
		this.targetHeight = this.callbacksPopupWindowHeight664;
		this.target = window.open(this.targetUrl, this.targetName, 
				"scrollbars=yes,width="+this.targetWidth+",height="+this.targetHeight+"");
		this.resWidth = Helper.defineWindowX(this.targetWidth);
		this.resHeight = Helper.defineWindowY();	
		this.target.moveBy(this.resWidth, this.resHeight);
		this.target.focus();
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Get current text converter form value.
 * 
 * @see #processCallbacks
 * @see Mediamanager#processMediaCallbacks
 * @returns text_converter
 * @throws applyError on exception
 */
function Helper_getTextConverterValue ()
{
	try {		
		// init
		var text_converter;
		
		var form_name = Helper.getAttr('id', $$('.botbg').first());
		var el_name = 'text_converter';
		var el_id = form_name + '_text_converter';
			
		if ($(el_id)) {
			var e = document.forms[form_name].elements[el_name];		
			for (var i = 0; i < e.length; i++) {
				if (e.options[i].selected == true)
					var _text_converter = e.options[i].value;
			}
			text_converter = _text_converter;
		} else {
			text_converter = 0;
		}
		return text_converter;
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Get current textarea selection.
 * 
 * @see #processCallbacks
 * @see Mediamanager#processMediaCallbacks
 * @returns text
 * @throws applyError on exception
 */
function Helper_getSelectionText(el)
{
	try {
		if (el) {
			// used within callacks
			var txtarea = el.replace(/^(_)(.+$)/, '$2');
			txtarea = $(txtarea);
		} else {
			// used within mediamanager callacks
			txtarea = $(form_target);
		}
		
		// init
		var text;
		
		if(document.selection) {
			var theSelection = document.selection.createRange().text;
			text = theSelection;
		} else if(txtarea.selectionStart || txtarea.selectionStart == '0') {
	 		var startPos = txtarea.selectionStart;
			var endPos = txtarea.selectionEnd;
			text = (txtarea.value).substring(startPos, endPos);
		} else {
			text = '';
		}
		return unescape(encodeURIComponent(text));
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Get current delimiter value.
 * <br />
 * In some cases it is required to change the delimiter to avoid syntax
 * conflicts while inserting references (e.g. working with cascading
 * style sheets or javascript, which uses brackets also).
 * 
 * @see #processCallbacks
 * @returns delimiter
 * @throws applyError on exception
 */
function Helper_getDelimiterValue()
{
	try {
		// init
		var delimiter;
		
		if ($('global_template_change_delimiter')) {
			delimiter = $F('global_template_change_delimiter');
		} else {
			delimiter = '';
		}
		return delimiter;
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Get the current pager page value.
 * <br />
 * This is needed for Mediamanager action popups (<em>upload</em>, <em>edit</em>)
 * which supposed to refresh the content display on close of popup.
 * 
 * @see #launchPopup
 * @see #processCallbacks
 * @see Mediamanager#processMediaCallbacks
 * @returns pager_page
 * @throws applyError on exception
 */
function Helper_getPagerPage()
{
	try {
		// init
		var pager_page;
		
		if($('pager_page_container')) {
			pager_page = $('pager_page_container').firstChild.nodeValue;
		} else {
			pager_page = '';
		}
		return pager_page;
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Get current insert type url string.
 * <br />
 * We fetch the form tag action string and perform a regex.
 * This is used within {@link #processCallbacks} to differ how to treat
 * the callbacks strings we build in callbacks.php.
 * 
 * @see #processCallbacks
 * @returns insert_type
 * @throws applyError on exception
 */
function Helper_getInsertType ()
{
	try {		
		var insert_type_path = Helper.getAttr('action', $$('.botbg').first());
		var insert_type = insert_type_path.replace(/^\/(.+)\/(.+)\/(.+$)/, '$2');
		
		if (insert_type == 'templating') {
			insert_type = 'InternalReference';
		}
		else if (insert_type == 'content') {
			insert_type = 'InternalLink';
		}
		return insert_type;
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Close popup and refresh Media Manager contents.
 * <br />
 * In addition to close the popup, we invoke functions in the parent window,
 * like revoke the lowering of opacity and refresh the Media Manager to reflect
 * the modified contents.
 * <br />
 * Used in popups where it is expected to close the window with a button.
 * 
 * @see Mediamanager#invokePager
 * @throws applyError on exception
 */
function Helper_closePopup ()
{       
	try {
		/* invoke function in parent window */
		self.opener.$('lyLowerOpacity').style.display = 'none';
		self.opener.Mediamanager.invokePager('', pager_page);
		
		/* Needed for func closePopupTrack(noAlert) */
		audit = true;
		
		/* set a timeout since the opened window has
		 to be present til process function in parent is executed */
		setTimeout ("self.close()", 1200);
		
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Close popup.
 * <br />
 * In addition to close the popup, we revoke the lowering of opacity.
 * Used in popups where it is expected to close the window with a href link.
 * 
 * @throws applyError on exception
 */
function Helper_closeLinksPopup ()
{       
	try {
		/* invoke function in parent window */
		self.opener.$('lyLowerOpacity').style.display = 'none';

		/* Needed for func closePopupTrack(NoAlert) */
		audit = true;
					
		/* set a timeout since the opened window has
		 to be present til process function in parent is executed */
		setTimeout ("self.close()", 100);
		
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Track the close of popups with expected refresh of Media Manager.
 * <br />
 * We need a handling if the user do not close the popups with the
 * appropriate buttons. For example, the user could use
 * keyboard shortcuts or close the popup by mouse click on the
 * window interface close button (depends on operating system).
 * <br />
 * So this function is added to the popups html body event <em>onunload</em>,
 * where its expected to close <em>and</em> refresh the Media Manager (with {@link #closePopup}).
 * There is a condition, that compares wether several control vars
 * (<em>audit</em>, <em>submitted</em>) are set (respectively are <em>bool</em> true)
 * or not. On the basis of the result, we invoke functions in the parent window,
 * like revoke the lowering of opacity and fire a alert demanding to close the
 * popup with the appropriate button or link. 
 * 
 * @param {global} audit Defined in {@link #closePopup}.
 * @param {global} submitted Avoid the execute of the onunload event.
 * @throws applyError on exception
 */
function Helper_closePopupTrack (elem)
{       
	try {
		// define global vars als false if not set
		if (typeof audit == 'undefined') {
			audit = false;
		}
		if (typeof submitted == 'undefined') {
			submitted = false;
		}
		if (audit !== true && submitted !== true) {
			self.opener.$('lyLowerOpacity').style.display = 'none';
			self.opener.alert(alertOnClosePopup);
			// reset global vars
			audit = false;
			submitted = false;
		}	
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Track the close of popups which contains href links as close action.
 * <br />
 * We need a handling if the user do not close the popups with the
 * appropriate link. For example, the user could use
 * keyboard shortcuts or close the popup by mouse click on the
 * window interface close button (depends on operating system).
 * <br />
 * So this function is added to the popups html body event <em>onunload</em>.
 * There is a condition, that compares wether the control var
 * (<em>audit</em>) are set (respectively are <em>bool</em> true)
 * or not. On the basis of the result, we revoke the lowering of opacity in the parent window.
 * 
 * @param {global} audit Defined in {@link #closeLinksPopup}.
 * @throws applyError on exception
 */
function Helper_closePopupTrackNoAlert (elem)
{       
	try {
		// define global vars als false if not set		
		if (typeof audit == 'undefined') {
			audit = false;
		}
		if (typeof submitted == 'undefined') {
			submitted = false;
		}
		if (audit !== true && submitted !== true) {
			self.opener.$('lyLowerOpacity').style.display = 'none';
			// reset global vars
			audit = false;
			submitted = false;
		}	
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Lower opacity via DOM build Layer.
 * <br />
 * Here we build a layer per DOM, which use a transparent PNG image.
 * 
 * @throws applyError on exception
 */
function Helper_lowerOpacity ()
{       
	try {
 		// properties
        this.cLeft = '0px';
        this.cTop = '0px';
        this.cPosition = 'absolute';
        this.cDisplay = 'block';
        this.imagePath = '../static/img/bg_overlay.png';
		this.lyContainer = $('container');   
        this.buildHeight = this.lyContainer.offsetHeight;
        this.buildWidth = this.lyContainer.offsetWidth;
		this.imageStr = '<img src="' + this.imagePath + '" width="' + this.buildWidth + '" height="' + this.buildHeight +'" alt="" />';
		this.targetToLower = $('lyLowerOpacity');

        if (this.targetToLower) {
		 	this.targetToLower.style.display = this.cDisplay;
			this.targetToLower.style.position = this.cPosition;
			this.targetToLower.style.top = this.cTop;
			this.targetToLower.style.left = this.cLeft;
			this.targetToLower.style.height = this.buildHeight + 'px';
			this.targetToLower.style.width = this.buildWidth + 'px';
			
			Element.update(this.targetToLower, this.imageStr);
        }
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Lower opacity via DOM build Layer on load of page.
 * <br />
 * Here we build a layer per DOM, which use a transparent PNG image.
 * Used within popups.
 * 
 * @throws applyError on exception
 */
function Helper_lowerOpacityOnUpload ()
{       
	try {
 		// properties
        this.cLeft = '0px';
        this.cTop = '0px';
        this.cPosition = 'absolute';
        this.cDisplay = 'block';
        this.imagePath = '../static/img/bg_overlay.png';
		this.lyContainer = $('modalWindow');   
        this.buildHeight = this.lyContainer.offsetHeight;
        this.buildWidth = this.lyContainer.offsetWidth;
		this.imageStr = '<img src="' + this.imagePath + '" width="' + this.buildWidth + '" height="' + this.buildHeight +'" alt="" />';
		this.targetToLower = $('lyLowerOpacity');

        if (this.targetToLower) {
		 	this.targetToLower.style.display = this.cDisplay;
			this.targetToLower.style.position = this.cPosition;
			this.targetToLower.style.top = this.cTop;
			this.targetToLower.style.left = this.cLeft;
			this.targetToLower.style.height = this.buildHeight + 'px';
			this.targetToLower.style.width = this.buildWidth + 'px';
				
			Element.update(this.targetToLower, this.imageStr);
        }
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Check browser and his version.
 * <br />
 * Sometimes we need this to distinguish between browser
 * and versions to intercept their different abilities.
 *
 * @returns Boolean
 * @throws applyError on exception
 */
function Helper_isBrowser(_browser, _version)
{	
	try {
		this.browser = _setBrowserString();
		this.version = _setBrowserStringVersion();
			
		if (this.browser == _browser) {
			if (_version) {
				if(this.version == _version) {
					return true;
				} else {
					return false;
				}
			} else {
				return true;
			}
		} else { 
			return false;
		}
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Process given navigator.agent string to find out browser name.
 * Helper for {@link #isBrowser}.
 *
 * @private
 * @returns var
 * @throws applyError on exception
 */
function _compare (string)
{
	try {
		res = detect.indexOf(string) + 1;
		thestring = string;
		return res;
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Get navigator.agent, compare it, fill global var and return it.
 * Helper for {@link #isBrowser}.
 *
 * @private
 * @returns var browser
 * @throws applyError on exception
 */
function _setBrowserString ()
{
	try {			
		detect = navigator.userAgent.toLowerCase();
		var browser;

		if (_compare('safari')) {
			browser = 'sa';
		}
		else if (_compare('msie')) {
			browser = 'ie';
		}
		else if (_compare('firefox')) {
			browser = 'ff';
		}
		else {
			browser = '';
		}
		return browser;
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Process given navigator.agent string to find out agent version.
 * Helper for {@link #isBrowser}.
 *
 * @private
 * @returns var browser
 * @throws applyError on exception
 */
function _setBrowserStringVersion ()
{
	try {			
		_setBrowserString();
		var version;		
		version = detect.charAt(res + thestring.length);
		return version;
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Define and resize window width.
 * <br />
 * Center the new window depending on giving Width.
 * 
 * @see #launchPopup
 * @param {var} elemWidth Given width
 * @return {number} x
 * @throws applyError on exception
 */
function Helper_defineWindowX (elemWidth)
{
	try {
		//properties
		this.el = elemWidth;
		var x;
		
		// all except Explorer
		if (self.innerHeight) {
			x = Math.round(self.innerWidth) - (Math.round(this.el));
		}
		// Explorer 6 Strict Mode
		else if (document.documentElement && document.documentElement.clientHeight) {
			x = Math.round(document.documentElement.clientWidth) - (Math.round(this.el));
		}
		// other Explorers
		else if (document.body) {
			x = Math.round(document.body.clientWidth) - (Math.round(this.el));
		}
		x = Math.round(x/2);
		return x;
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Define and resize window height.
 * <br />
 * Center the new window depending on calculated height.
 * 
 * @see #launchPopup
 * @throws applyError on exception
 * @return {number} y
 */
function Helper_defineWindowY ()
{
	try {
		//properties
		var y;
	
		// all except Explorer
		if (self.innerHeight) { 
			y = Math.round(self.innerHeight/6);
		}
		// Explorer 6 Strict Mode
		else if (document.documentElement && document.documentElement.clientHeight) {
			y = Math.round(document.documentElement.clientHeight/6);
		}
		// other Explorers
		else if (document.body) {
			y = Math.round(document.body.clientHeight/6);
		}
		return y;
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Define window scroll offset.
 * <br />
 * Returns the scroll offset of page.
 * Adapted from http://www.quirksmode.org/
 * 
 * @see #loaderChangeBlogCommentStatus
 * @throws applyError on exception
 * @return {number} y
 */
function Helper_definePageY ()
{
	try {
		var y;
		
		// all except Explorer
		if (self.pageYOffset) {
			y = self.pageYOffset;
		}
		// Explorer 6 Strict
		else if (document.documentElement && document.documentElement.scrollTop) {
			y = document.documentElement.scrollTop;
		}
		// all other Explorers
		else if (document.body) {
			y = document.body.scrollTop;
		}
		return y;
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Show next appropriate DOM node.
 * <br />
 * Used in internal links popups to reflect sitemap structure.
 * 
 * @see #loaderPagesLinks
 * @see #showResponsePagesSecondLinks
 * @see #showResponsePagesThirdLinks
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_showNextNode(elem)
{
	try {		
		// init
		var nextNode;
		
		// get source node id from element
		var sourceNode = elem.parentNode.parentNode.parentNode.parentNode.parentNode;
		
		// get next possible node id
		if (sourceNode.id != 'thirdNode') {
			nextNode = Helper.getAttrNextSibling('id', sourceNode, 2);
			if (Helper.isBrowser('ie')) {
				nextNode = Helper.getAttrNextSibling('id', sourceNode, 1);
			}
		}
		var url = this.parseCallbacksFilePath + elem.name + '.php';
		var pars = 'id=' + elem.id +'&nextNode=' + nextNode;	
		
		// init
		var myAjax;
		
		if (nextNode == 'secondNode') {
			myAjax = new Ajax.Request(
			url,
			{
				method : 'get',
				parameters : pars,
				onLoading : Helper.loaderPagesLinks,
				onComplete : Helper.showResponsePagesSecondLinks
			});
		}
		else if (nextNode == 'thirdNode') {
			myAjax = new Ajax.Request(
			url,
			{
				method : 'get',
				parameters : pars,
				onLoading : Helper.loaderPagesLinks,
				onComplete : Helper.showResponsePagesThirdLinks
			});
		}
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Show next appropriate DOM node.
 * <br />
 * Used in insert boxes popups to reflect sitemap structure.
 * 
 * @see #loaderPagesLinks
 * @see #showResponsePagesSecondLinks
 * @see #showResponsePagesThirdLinks
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_showNextNodeBoxes(elem)
{
	try {
		//init
		var nextNode;
		
		// get source node id from element
		var sourceNode = elem.parentNode.parentNode.parentNode.parentNode.parentNode;
		
		// get next possible node id
		if (sourceNode.id != 'thirdNode') {
			nextNode = Helper.getAttrNextSibling('id', sourceNode, 2);
			if (Helper.isBrowser('ie')) {
				nextNode = Helper.getAttrNextSibling('id', sourceNode, 1);
			}
		}	
		//var url = this.parsePagesBoxesLinksPath;
		var url = this.parseCallbacksFilePath + elem.name + '.php';
		var pars = 'id=' + elem.id +'&nextNode=' + nextNode;
		
		if (nextNode == 'secondNode') {
		var myAjax = new Ajax.Request(
			url,
			{
				method : 'get',
				parameters : pars,
				onLoading : Helper.loaderPagesLinks,
				onComplete : Helper.showResponsePagesSecondLinks
			});
		}
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Display indicator while XMLHttpRequest processing.
 *
 * @see #showNextNode
 * @throws applyError on exception
 */
function Helper_loaderPagesLinks ()
{
	try {
		Element.show('indicator_pagesLinks');
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Populate on XMLHttpRequest Response.
 *
 * @see #showNextNode
 * @param {object} req XMLHttpRequest response
 * @throws applyError on exception
 */
function Helper_showResponsePagesSecondLinks(req)
{
	try {
		Effect.Fade('indicator_pagesLinks', {duration: 0.4});
		Effect.Appear('secondNode',{duration: 0.6});
		$('secondNode').innerHTML = req.responseText;		
		Behaviour.reapply('a.process_insert');
		Behaviour.reapply('a.showNextNode');
		Behaviour.reapply('a.showNextNodeBoxes');

		// trigger tooltip
		$$(".page a").each( function(link) {
			new Tooltip(link, {
				mouseFollow: false, 
				opacity: 1, 
				backgroundColor: '#333',
				textColor: '#fff', 
				appearDuration: '0.15'
			});
		});
		
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Populate on XMLHttpRequest Response.
 *
 * @see #showNextNode
 * @param {object} req XMLHttpRequest response
 * @throws applyError on exception
 */
function Helper_showResponsePagesThirdLinks(req)
{
	try {
		Effect.Fade('indicator_pagesLinks', {duration: 0.4});
		Effect.Appear('thirdNode',{duration: 0.6});	
		$('thirdNode').innerHTML = req.responseText;
		Behaviour.reapply('a.process_insert');
		Behaviour.reapply('a.showNextNode');
		
		// trigger tooltip
		$$(".page a").each( function(link) {
			new Tooltip(link, {
				mouseFollow: false, 
				opacity: 1, 
				backgroundColor: '#333',
				textColor: '#fff', 
				appearDuration: '0.15'
			});
		});
				
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Process inserting content.
 * <br />
 * Adapted from http://sourceforge.net/projects/wikipedia
 * 
 * @see Mediamanager#showResponseProcessMediaCallbacks
 * @param {string} id Form element to populate
 * @param {string} str Opening part of build string
 * @param {string} tagClose Closing part of build string
 * @param {string} sampleText Text to set, when we use str and tagClose
 * @throws applyError on exception
 */
function Helper_insertTagsCallbacks(id, str)
{
	try {
		/* oberserve this!
		
		We have to distinguish here, because the IE is obviously too dumb to differ between elements
		which has the same value on different attributes (name, id). Here we have a conflict with
		the form hidden field attribute. So we serve IE by object forms[elements], while all others
		are able to use the standards (pointing the element by document.getElementById().
		
	 	if (Helper.isBrowser('ie')) {
			var _form_name = id.replace(/(.+)(_.+$)/, '$1');
			var txtarea = document.forms[_form_name].elements[id];
		} else {
			var txtarea = $(id);
		}
		*/		
		var txtarea = $(id);
		
		// IE
		if(document.selection) {
			var theSelection = document.selection.createRange().text;
			txtarea.focus();
			if(theSelection.charAt(theSelection.length - 1) == " "){// exclude ending space char, if any
				theSelection = theSelection.substring(0, theSelection.length - 1);
				document.selection.createRange().text = str + theSelection + " ";
			} else {
				document.selection.createRange().text = str + theSelection;
			}
		// Mozilla
		} else if(txtarea.selectionStart || txtarea.selectionStart == '0') {
	 		var startPos = txtarea.selectionStart;
			var endPos = txtarea.selectionEnd;
			var scrollTop=txtarea.scrollTop;
			var myText = (txtarea.value).substring(startPos, endPos);
			subst = str;
			txtarea.value = txtarea.value.substring(0, startPos) + subst + txtarea.value.substring(endPos, txtarea.value.length);		
			txtarea.focus();
			var cPos=startPos+(str.length);
			txtarea.selectionStart=cPos;
			txtarea.selectionEnd=cPos;
			txtarea.scrollTop=scrollTop;
		}
		// reposition cursor if possible
		if (txtarea.createTextRange) txtarea.caretPos = document.selection.createRange().duplicate();
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Process inserting content.
 * <br />
 * Adapted from http://sourceforge.net/projects/wikipedia
 * 
 * @see #showResponseProcessCallbacks
 * @param {string} id Form element to populate
 * @param {string} str Opening part of build string
 * @param {string} tagClose Closing part of build string
 * @param {string} sampleText Text to set, when we use str and tagClose
 * @throws applyError on exception
 */
function Helper_insertTagsFromPopupCallbacks(id, str)
{
	try {
		/* oberserve this!
		
		We have to distinguish here, because the IE is obviously too dumb to differ between elements
		which has the same value on different attributes (name, id). Here we have a conflict with
		the form hidden field attribute. So we serve IE by object forms[elements], while all others
		are able to use the standards (pointing the element by document.getElementById().
		
		if (Helper.isBrowser('ie')) {
			var _form_name = id.replace(/(.+)(_.+$)/, '$1');
			var txtarea = opener.document.forms[_form_name].elements[id];
		} else {
			var txtarea = opener.$(id);
		}
		*/
		var txtarea = opener.$(id);
		
		// IE
		if(opener.document.selection) {
			var theSelection = document.selection.createRange().text;
			txtarea.focus();
			if(theSelection.charAt(theSelection.length - 1) == " "){// exclude ending space char, if any
				theSelection = theSelection.substring(0, theSelection.length - 1);
				opener.document.selection.createRange().text = str + theSelection + " ";
			} else {
				opener.document.selection.createRange().text = str + theSelection;
			}
		// Mozilla
		} else if(txtarea.selectionStart || txtarea.selectionStart == '0') {
	 		var startPos = txtarea.selectionStart;
			var endPos = txtarea.selectionEnd;
			var scrollTop=txtarea.scrollTop;
			var myText = (txtarea.value).substring(startPos, endPos);
			subst = str;
			txtarea.value = txtarea.value.substring(0, startPos) + subst + txtarea.value.substring(endPos, txtarea.value.length);		
			txtarea.focus();
			var cPos=startPos+(str.length+myText.length);
			txtarea.selectionStart=cPos;
			txtarea.selectionEnd=cPos;
			txtarea.scrollTop=scrollTop;
		}
		// reposition cursor if possible
		if (txtarea.createTextRange) txtarea.caretPos = opener.document.selection.createRange().duplicate();
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Process and handle internal callbacks.
 * <br />
 * This function handles all the reference popups within the welcompose admin interface.
 * 
 * @see #showResponseProcessCallbacks
 * @param {string} elem Current elem to process
 * @throws applyError on exception
 */
function Helper_processCallbacks (elem)
{
	try {
		// properties
		this.elem = elem;
		this.elName = this.elem.name;
		this.elTarget = Helper.getAttrNextSibling('id', this.elem, 1);
		
		this.targetHeight = this.callbacksPopupWindowHeight664;
		this.targetName = this.elTarget;
		
		Helper.lowerOpacity();
		
		// used to differ between the popup window width
		var win_names = {
			'pages_links': this.callbacksPopupWindowWidth745,
			'blog_tags': this.callbacksPopupWindowWidth460,
			'event_tags': this.callbacksPopupWindowWidth460,
			'structuraltemplates_links': this.callbacksPopupWindowWidth460,
			'abbreviations_links': this.callbacksPopupWindowWidth745,
			'globalboxes_links': this.callbacksPopupWindowWidth460,
			'globalfiles_links': this.callbacksPopupWindowWidth460,
			'globaltemplates_links': this.callbacksPopupWindowWidth460,
			'boxes_links': this.callbacksPopupWindowWidth745,
			'smartyplugins_links': this.callbacksPopupWindowWidth745
		};

		// temp var used in for loop
		var _width = this.elTarget;
		var n;
		
		// execute url target width definition
		for (placeholder in win_names) {
			n = new RegExp(placeholder, 'gi');
			_width = _width.replace(n, win_names[placeholder]);
			this.targetWidth = _width;
		}
		
		// path definitions for url
		var url_paths = {
			'pages_links': 'content',
			'blog_tags': 'content',
			'event_tags': 'content',
			'structuraltemplates_links': 'content',
			'abbreviations_links': 'content',
			'globalboxes_links': 'templating',
			'globalfiles_links': 'templating',
			'globaltemplates_links': 'templating',
			'boxes_links': 'templating',
			'smartyplugins_links': 'templating',
		};
		
		// temp var used in for loop
		var _path = this.elTarget;
		
		// execute url paths definition
		for (placeholder in url_paths) {
			n = new RegExp(placeholder, 'gi');
			_path = _path.replace(n, url_paths[placeholder]);
			this.url = '../' + _path + '/' + this.parseCallbacksFilePath + this.elTarget;
		}

		// get hidden fields
		// this params are needed whenever we want
		// to know a blog posting enviroment values,
		// e.g. to be able to differ blog tags assigment
		// if non exist, declare value as empty
		var dId = (document.getElementsByName('id')[0]) ? document.getElementsByName('id')[0] : '';
		var dPage = (document.getElementsByName('page')[0]) ? document.getElementsByName('page')[0] : '';
			
		// grab enviroment variables
		// hash the returned variables
		var getElems = {
			id : this.elem.id,
			form_target : this.elName,
			delimiter : Helper.getDelimiterValue(),
			text : Helper.getSelectionText(this.elName),
			text_converter : Helper.getTextConverterValue(),
			pager_page : Helper.getPagerPage(),
			insert_type : Helper.getInsertType(),
			dId : dId.value,
			dPage : dPage.value
		};
		var o = $H(getElems);
		var reqString = o.toQueryString();
						
		this.url = this.url + '.php' + '?' + reqString;	
		this.targetUrl = this.url;
		this.target = window.open(this.targetUrl, this.targetName, 
				"scrollbars=yes,width="+this.targetWidth+",height="+this.targetHeight+"");
		this.resWidth = Helper.defineWindowX(this.targetWidth);
		this.resHeight = Helper.defineWindowY();

		this.target.moveBy(this.resWidth, this.resHeight);
		this.target.focus();		
	} catch (e) {
		_applyError(e);
	}
}


/**
 * Populate on XMLHttpRequest response.
 * <br />
 * Insert the callback result string.
 *
 * @see #processMediaCallbacks
 * @param {object} req XMLHttpRequest response
 * @throws applyError on exception
 */
function Helper_callbacksInsert(elem)
{
	try {
		// properties
		this.elem = elem;
		
		// hash collected variables
		var getElems = {
			id : this.elem.id,
			form_target : form_target,
			delimiter : delimiter,
			text : text,
			text_converter : text_converter,
			pager_page : pager_page,
			insert_type : insert_type,
			type : this.elem.name,
			posting_id : (this.elem.name == 'blog_posting' || this.elem.name == 'event_posting') ? Helper.getAttrNextSibling('id', this.elem, 1) : '',
			year : (this.elem.name == 'archive_year' || this.elem.name == 'archive_month') ? Helper.getAttrNextSibling('id', this.elem, 1) : '',
			month : (this.elem.name == 'archive_month') ? Helper.getAttrNextSibling('id', this.elem, 2) : ''
		};
		var o = $H(getElems);
		var reqString = o.toQueryString();
		
		var url = this.parseCallbacksPath;
		var pars = reqString;

		var myAjax = new Ajax.Request(
			url,
			{
				method : 'post',
				parameters : pars,
				onComplete : Helper.showResponseProcessCallbacks
			});
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Populate on XMLHttpRequest response.
 * <br />
 * Insert the callback result array (as string -> join).
 * This function is used to select several checked form field lists and
 * assign the result array to callbacks.php as a string.
 * <br />
 * The value of the name attribute of the corresponding form 
 * must be the plural of the rel value of the action link element
 *
 * <br /><br />Example:
 * <pre><code>
<form method="post" name="blogtags">
... form checkbox Elements
<a href="#" class="submit240 process_insert_array" rel="blogtag">{i18n 'Insert Tag(s)'}</a>
</form>
 * </code></pre>
 *
 * @see #processMediaCallbacks
 * @param {object} req XMLHttpRequest response
 * @throws applyError on exception
 */
function Helper_callbacksInsertArray(elem)
{
	try {
		// properties
		this.elem = elem;
		this.elRel = this.elem.rel;
		// build plural of this.elRel
		this.elForm = this.elRel + 's';
		
		var a = new Array();
		var count = 0;
		
		// get elements of the form assuming it
		// only contains checkbox input elements
		var el = eval('document.'+this.elForm+'.elements');
		
		for (var i = 0; i < el.length; i++) {
			if (el[i].checked) {
				a[count++] = el[i].value;
			}
		}
		
		// turn array into a string
		var content = a.join(',');
	
		// get rid of the first colon
		if (content.charAt(0) == ',')
			content = content.substr(1);
		
 		// hash collected variables
		var getElems = {
			id : this.elem.id,
			form_target : form_target,
			delimiter : delimiter,
			text : content,
			text_converter : text_converter,
			pager_page : pager_page,
			insert_type : insert_type,
			type : this.elRel
		};
		var o = $H(getElems);
		var reqString = o.toQueryString();
		
		var url = this.parseCallbacksPath;
		var pars = reqString;

		var myAjax = new Ajax.Request(
			url,
			{
				method : 'post',
				parameters : pars,
				onComplete : Helper.showResponseProcessCallbacks
			});
		
		
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Populate on XMLHttpRequest response.
 * <br />
 * Insert the callback result string.
 *
 * @see #processMediaCallbacks
 * @param {object} req XMLHttpRequest response
 * @throws applyError on exception
 */
function Helper_showResponseProcessCallbacks(req)
{
	try {
		var _form_target = form_target.replace(/^(_)(.+$)/, '$2');
		Helper.insertTagsFromPopupCallbacks(_form_target, req.responseText);
		Helper.closeLinksPopup();
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Insert content into a specified textarea.
 * <br />
 * Insert the given string.
 *
 * @param {var} elem Current element
 * @param {var} target Textarea to populate
 * @throws applyError on exception
 */
function Helper_insertContentIntoTextarea(elem,target)
{
	try {
		var source = Helper.getAttr('rel', elem);		
		Helper.insertTagsCallbacks(target, source);
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Change blog comment status.
 * <br/>
 * Get the form select values with corresponding comment id
 * and edit on page.
 * 
 * @see #loaderChangeBlogCommentStatus
 * @see #showResponseChangeBlogCommentStatus
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_changeBlogCommentStatus (elem)
{	
	try {
		// init
		var statusId;
		var commentId;
		
		// get status value
		statusId = elem.options[elem.selectedIndex].value;
	
		// find blog comment id (parent fieldset applicated id)
		commentId = elem.parentNode.id;	

		// properties
		var url = this.parseBlogCommmentStatusChangePath;
		var pars = 'status_id=' + statusId + '&comment_id=' + commentId;

		var myAjax = new Ajax.Request(
			url,
			{
				method : 'get',
				onLoading : Helper.loaderChangeBlogCommentStatus,
				parameters : pars,
				onComplete : Helper.showResponseChangeBlogCommentStatus
			});
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Display indicator layer while XMLHttpRequest processing.
 * Triggers {@link #lowerOpacity}.
 *
 * @see #lowerOpacity
 * @throws applyError on exception
 */
function Helper_loaderChangeBlogCommentStatus ()
{
	try {
		Helper.lowerOpacity();

		this.statuschange = $('statuschange');
		var winHeight = Helper.defineWindowY();
		var scrollPos = Helper.definePageY();		
		this.statuschange.style.top = winHeight + scrollPos + 140 + 'px';
		
		Effect.Appear(this.statuschange, {duration: 0.6, delay: 0.2});
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Layer fadeout on XMLHttpRequest response.
 *
 * @see #changeBlogCommentStatus
 * @param {object} req XMLHttpRequest response
 * @throws applyError on exception
 */
function Helper_showResponseChangeBlogCommentStatus(req)
{
	try {
		setTimeout("Effect.Fade('statuschange', {duration: 0.6})", 2000);
		setTimeout("$('lyLowerOpacity').style.display = 'none';", 2800);
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Display upload indicator.
 * Trigger {@link #lowerOpacityOnUpload}. This is used on submit
 * within the media upload popup to indicate the upload still remains.
 *
 * @see #lowerOpacityOnUpload
 * @throws applyError on exception
 */
function Helper_showFileUploadMessage()
{
	try {
		Helper.lowerOpacityOnUpload();
		Effect.Appear('uploadMessage', {duration: 0.4});
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Validate form elements on the fly.
 * <br />
 * Get the form element id attribute value and populate the
 * regex processed response into the layer <em>container</em>.
 * This assumes that we have corresponding html markup/css.
 * <br />
 * For in depths explanation please have a look on the online
 * project support area.
 *
 * @param {object} elem Current element
 * @throws applyError on exception
 */
function Helper_validate(elem)
{	
	var url		= this.validatePath;
	elemID		= $(elem).getAttribute('id');
	var elemVal	= $F(elem);
	var pars	= 'elemID=' + elemID + '&elemVal=' + elemVal;
	var container = elemID + '_container';
	
	var myAjax = new Ajax.Updater ( 
		{
			failure: container,
			success: container
		},
		url,
		{
			method: 'post',
			parameters: pars
		});		
}

/**
 * Confirm navigation delete.
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_confirmDelNavAction(elem)
{
	try {	
		var v = confirm(confirmMsgDelNav);

		if (v == true) {
			window.location.href = elem.href;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Confirm page delete.
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_confirmDelPageAction(elem)
{
	try {	
		var v = confirm(confirmMsgDelPage);

		if (v == true) {
			window.location.href = elem.href;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Confirm project delete.
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_confirmDelProjectAction(elem)
{
	try {	
		var v = confirm(confirmMsgDelProject);

		if (v == true) {
			window.location.href = elem.href;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Confirm template type delete.
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_confirmDelTplTypeAction(elem)
{
	try {	
		var v = confirm(confirmMsgDelTplType);

		if (v == true) {
			window.location.href = elem.href;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Confirm template sets delete.
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_confirmDelTplSetsAction(elem)
{
	try {	
		var v = confirm(confirmMsgDelTplSets);

		if (v == true) {
			window.location.href = elem.href;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Confirm global template delete.
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_confirmDelTplGlobalAction(elem)
{
	try {	
		var v = confirm(confirmMsgDelTplGlobal);

		if (v == true) {
			window.location.href = elem.href;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Confirm global file delete.
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_confirmDelTplGlobalfileAction(elem)
{
	try {	
		var v = confirm(confirmMsgDelTplGlobalfile);

		if (v == true) {
			window.location.href = elem.href;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Confirm abbreviation delete.
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_confirmDelAbbreviationAction(elem)
{
	try {	
		var v = confirm(confirmMsgDelAbbreviation);

		if (v == true) {
			window.location.href = elem.href;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Confirm Blog Posting delete.
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_confirmDelBlogPostingAction(elem)
{
	try {	
		var v = confirm(confirmMsgDelBlogPosting);

		if (v == true) {
			window.location.href = elem.href;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Confirm Event Posting delete.
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_confirmDelEventPostingAction(elem)
{
	try {	
		var v = confirm(confirmMsgDelEventPosting);

		if (v == true) {
			window.location.href = elem.href;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Confirm simple date delete.
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_confirmDelSimpleDateAction(elem)
{
	try {	
		var v = confirm(confirmMsgDelSimpleDate);

		if (v == true) {
			window.location.href = elem.href;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Confirm user delete.
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_confirmDelUserAction(elem)
{
	try {	
		var v = confirm(confirmMsgDelUser);

		if (v == true) {
			window.location.href = elem.href;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Getter for parent node attribute.
 *
 * @param {string} attr Given attribute to use
 * @param {object} elem Current element
 * @param {string} level Depth of parent node search
 * @return object Parent node attribute of element
 * @throws applyError on exception
 */
function Helper_getAttrParentNode (attr, elem, level)
{
	this.browser = _setBrowserString();

	for (var a = elem; level > 0; level--) {
		a = a.parentNode;
	}
		
	if (this.browser == 'ie')
		return a.attributes[attr].value;
	else
		return a.getAttribute(attr);
}

/**
 * Getter for current element parent node next node attribute.
 *
 * @param {string} attr Given attribute to use
 * @param {object} elem Current element
 * @param {string} level Depth of parent node search
 * @return object Next node attribute of parent node of the current element
 * @throws applyError on exception
 */
function Helper_getAttrParentNodeNextNode (attr, elem, level)
{
	this.browser = _setBrowserString();

	for (var a = elem; level > 0; level--) {
		a = a.parentNode;
	}	
	
	if (this.browser == 'ie')
		a = a.nextSibling;
	else
		a = a.nextSibling.nextSibling;

	if (this.browser == 'ie')
		return a.attributes[attr].value;
	else
		return a.getAttribute(attr);
}

/**
 * Getter for node attribute.
 *
 * @param {string} attr Given attribute to use
 * @param {object} elem Current element
 * @return object Attribute of element
 * @throws applyError on exception
 */
function Helper_getAttr (attr, elem)
{
	this.browser = _setBrowserString();
		
	if (this.browser == 'ie')
		return elem.attributes[attr].value;
	else
		return elem.getAttribute(attr);
}


/**
 * Getter for next sibling node attribute.
 *
 * @param {string} attr Given attribute to use
 * @param {object} elem Current element
 * @param {string} level Depth of parent node search
 * @return object Next sibling attribute
 * @throws applyError on exception
 */
function Helper_getAttrNextSibling (attr, elem, level)
{
	this.browser = _setBrowserString();

	for (var a = elem; level > 0; level--) {
		a = a.nextSibling;
	}
		
	if (this.browser == 'ie')
		return a.attributes[attr].value;
	else
		return a.getAttribute(attr);
}

/**
 * Getter for next sibling first child node attribute.
 *
 * @param {object} elem Current element
 * @param {string} level Depth of parent node search
 * @return object Next sibling first child value
 * @throws applyError on exception
 */
function Helper_getNextSiblingFirstChild (elem, level)
{
	this.browser = _setBrowserString();
	
	if (this.browser == 'ie' || this.browser == 'sa')
		level-- ;

	for (var a = elem; level > 0; level--) {
		a = a.nextSibling;
	}
	return a.firstChild;
}

/**
 * Getter for parent node data.
 *
 * @param {object} elem Current element
 * @param {string} level Depth of parent node search
 * @return object Parent node data
 * @throws applyError on exception
 */
function Helper_getDataParentNode (elem, level)
{
	for (var a = elem; level > 0; level--) {
		a = a.parentNode;
	}
	return Helper.trim(a.firstChild.nodeValue.toLowerCase());	
}

/**
 * Getter for parent node next sibling.
 *
 * @param {object} elem Current element
 * @param {string} level Depth of parent node search
 * @return object Parent node next sibling
 * @throws applyError on exception
 */
function Helper_getParentNodeNextSibling (elem, level)
{
	this.browser = _setBrowserString();
	
	if (this.browser == 'ie' || this.browser == 'sa')
		level-- ;
		
	for (var a = elem.parentNode; level > 0; level--) {
		a = a.nextSibling;
	}
	if (typeof a != 'undefined')
		return a;
}

/**
 * Getter for parent node previous sibling.
 *
 * @param {object} elem Current element
 * @param {string} level Depth of parent node search
 * @return object Parent node previous sibling
 * @throws applyError on exception
 */
function Helper_getParentNodePreviousSibling (elem, level)
{
	this.browser = _setBrowserString();
	
	if (this.browser == 'ie' || this.browser == 'sa')
		level-- ;
		
	for (var a = elem.parentNode; level > 0; level--) {
		a = a.previousSibling;
	}
	if (typeof a != 'undefined')
		return a;
}

/**
 * Wrapper to transform form field values to valid urls.
 * <br />
 * Fills the related url form field with transformed values
 * ({link #URLify}) of the current form field element.
 *
 * @see #URLify
 * @param {string} elem Current Element
 * @throws applyError on exception
 */
function Helper_convertFieldValuesToValidUrl (elem, attr)
{
	try {	
		//properties
		this.elem = elem;
		this.attr = attr;
		
		/**
		* Helper func fails when the appropriate field help file has been activated.
		* Seems the DOM is actually not fully cleaned up after hide the help again.
		*/		
		// get next node (e.g. label) attribute
		//var el = Helper.getAttrParentNodeNextNode (this.attr, this.elem, 1);		
		
		/**
		* Since we plan to refactor the whole thing we do not pay much attention 
		* on this dumb error case. So we somewhat hardwire the event destination.
		*/
		var el = $(this.elem.id + '_url');
		
		// fill related form field with transformed results
		$(el).value = Helper.URLify(this.elem.value);
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Wrapper to transform form field values to valid urls on href click.
 * <br />
 * Fills the related url form field with transformed values
 * ({link #URLify}) of the current form field element.
 *
 * @see #URLify
 * @param {string} elem Current Element
 * @throws applyError on exception
 */
function Helper_convertSomeFieldValuesToValidUrl (elem, attr)
{
	try {	
		//properties
		this.elem = elem;
		this.attr = attr;		
		this._src = Helper.getAttrParentNode(this.attr, this.elem, 2)

		var el = $(this._src + '_url');		
		var el_src = $(this._src);
		
		// fill related form field with transformed results
		$(el).value = Helper.URLify(el_src.value);
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Transforms form field values to valid urls.
 * 
 * @see #convertFieldValuesToValidUrl
 * @param {string} string given string
 * @return string processed string
 * @throws applyError on exception
 */
function Helper_URLify (string)
{
	try {	
		// convert string to lowercase so that we always operate on lowercases
		string = string.toLowerCase();

		// trim whitespaces
		Helper.trim(string);
	
		// definitions for char normalization
		var normalizations = {
			// german
			'ä': 'ae',
			'ö': 'oe',
			'ü': 'ue',
			'ß': 'ss'
			// french
		
			// spanish
		
			// swedish
		
			// other
		};
	
		// execute char normalization
		for (placeholder in normalizations) {
			var r = new RegExp(placeholder, 'gi');
			string = string.replace(r, normalizations[placeholder]);
		}
	
		// remove everything except a-z, 0-9 and hyphens and replace it with a hyphen 
		string = string.replace(/[^a-z0-9\-]/g, '-');
	
		// remove unnecessary hyphens
		string = string.replace(/-{2,}/g, '-');
	
		// remove hyphens at the beginning and at the end of the string
		string = string.replace(/^(-+)/, '');
		string = string.replace(/(-+)$/, '');
	
	    return string;
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Binds available boxes to current page
 *
 * @param {string} elem Current Element
 * @throws applyError on exception
 */
function Helper_adoptBox (elem)
{
	try {
		Element.scrollTo('container');
	
		var page_name = elem.parentNode.parentNode;
		
		if (Helper.isBrowser('ie')) {
			page_name = page_name.childNodes[1].innerHTML;
		} else {
			page_name = page_name.childNodes[3].innerHTML;
		}
					
		var url = '../content/pages_boxes_adopt.php';
		var pars = 'id=' + elem.id + '&page=' + elem.rel + '&page_name=' + page_name;
		
		var myAjax = new Ajax.Request(
			url,
			{
				method : 'post',
				parameters : pars,
				onLoading : Helper.loaderAdoptBox,
				onComplete : Helper.showResponseAdoptBox
			});
			
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Display indicator layer while XMLHttpRequest processing.
 *
 * @throws applyError on exception
 */
function Helper_loaderAdoptBox ()
{
	try {
		Element.show('indicator_adopt');
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Layer fadeout on XMLHttpRequest response.
 *
 * @see #adoptBox
 * @param {object} req XMLHttpRequest response
 * @throws applyError on exception
 */
function Helper_showResponseAdoptBox(req)
{
	try {
		var el = $('boxes');
		var res = $('noresult');
		
		// if resultset is empty replace DOM Element
		//  otherwise insert returned contents
		if(res){
			Element.replace(res, req.responseText);
		} else {
			Element.insert(el, {'bottom': req.responseText});
		}
		setTimeout("Effect.Fade('indicator_adopt', {duration: 0.4})", 300);
	} catch (e) {
		_applyError(e);
	}
}


/**
 * Execute action functions asynchronously
 *
 * @param {string} elem Current Element
 * @throws applyError on exception
 */
function Helper_runAction (elem)
{
	try {
		// reference id as global var
		e = elem.id;
		
		// define object to fill within the process
		if (Helper.isBrowser('sa')) {
			target = Helper.getParentNodeNextSibling(elem, 3);
		} else {
			target = Helper.getParentNodeNextSibling(elem, 2);
		}
		
		// current table row
		targetRow = elem.parentNode.parentNode;
		
		// error table row
		targetError = Helper.getParentNodePreviousSibling(elem, 2);
		
		// if div error is available in the DOM, destroy it
		if($('error')) {
			$('error').remove();
		}
						
		// if sucess img is available in the DOM, destroy it
		if($(e + '_succeed')) {
			$(e + '_succeed').remove();
		}
		
		var url = elem.href;
		var pars = 'id=' + elem.id + '&page_id=' + $F('get_pages') + '&apply_page=' + $F('apply_page');
		
		var myAjax = new Ajax.Request(
			url,
			{
				method : 'get',
				parameters : pars,
				onLoading : Helper.loaderRunAction,
				onFailure: function(res) { alert (res.responseText);},
				onSuccess : Helper.showResponseRunAction
			});
			
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Display indicator layer while XMLHttpRequest processing.
 *
 * @throws applyError on exception
 */
function Helper_loaderRunAction ()
{
	try {
		Element.insert(target, {'top':'<img id="' + e + '_indicator" src="../static/img/indicator.gif" alt="" />'});
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Layer fadeout on XMLHttpRequest response.
 *
 * @see #runAction 
 * @param {object} req XMLHttpRequest response
 * @throws applyError on exception
 */
function Helper_showResponseRunAction(req)
{	
	var r = req.responseText.match(/\berror\b/gi);		
	
	if (r) {
		Element.hide(e + '_indicator');
		Element.insert(targetError, {'top': req.responseText});
	} else {
		setTimeout("Effect.Fade('" + e + "_indicator', {duration: 0.2})", 200);
		setTimeout("Element.insert(target, {'top':'<img id=\"' + e + '_succeed\" src=\"../static/img/icons/success.gif\" alt=\"\" />'})", 700);
		new Effect.Highlight(targetRow, {startcolor: '#DCEBF7',
		endcolor: '#FFFFFF', duration: 1.6, delay: 0.7});
		
		// apply default
		$('apply_page').checked = false;
		var target = $$('.target_toggleView').first();
		new Effect.Fade(target,{delay: 0, duration: 0.4});
	}
}


/**
 * Check all checkboxes
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_selAllCheckboxes(elem)
{
	try {	
		// properties
		// build plural of this.elRel
		this.elForm = elem.rel + 's';
		
		// get elements of the form assuming it
		// only contains checkbox input elements
		var el = eval('document.'+this.elForm+'.elements');
		
		for (var i = 0; i < el.length; i++) {
			el[i].checked = true;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Uncheck all checkboxes
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_deselAllCheckboxes(elem)
{
	try {	
		// properties
		// build plural of this.elRel
		this.elForm = elem.rel + 's';
		
		// get elements of the form assuming it
		// only contains checkbox input elements
		var el = eval('document.'+this.elForm+'.elements');
		
		for (var i = 0; i < el.length; i++) {
			el[i].checked = false;
		}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Goto page related box on select
 * <br/>
 * Get the form select id and option values
 * and go to the choosen page box edit url
 * 
 * @param {var} elem Current element
 * @throws applyError on exception
 */
function Helper_goToPageBox (elem)
{	
	try {
		// get box and page value
		var box_id = elem.options[elem.selectedIndex].value;
		var page_id = elem.id;	

		// properties
		var url = '../content/pages_boxes_edit.php' + '?';
		var pars = 'page=' + page_id + '&id=' + box_id;

		window.location.href = url + pars;
	} catch (e) {
		_applyError(e);
	}
}

/**
 * Get related pages to apply on page creation.
 * <br />
 * Get pages which have content table fields. This
 * is used whenever the user chooses to prefill the
 * created page with appropriate content of already applied pages 
 * 
 * @see #showResponseGetRelatedPages
 * @param {object} elem Provided element
 * @throws applyError on exception
 */
function Helper_getRelatedPages(elem)
{
	try {	
		var url = '../content/pages_apply_content.php';
		var pars = 'type=' + elem.options[elem.selectedIndex].value;
	
		var myAjax = new Ajax.Request(
			url,
			{
				method : 'get',
				parameters : pars,
				onComplete : Helper.showResponseGetRelatedPages
			});
			
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Get related pages to apply on page creation xhr response.
 * <br />
 * Populate select form element with provided pages 
 * 
 * @see #getRelatedPages
 * @param {object} req XHR response
 * @throws applyError on exception
 */
function Helper_showResponseGetRelatedPages(req)
{
	try {
		// update the select form element
		Element.update($('page_apply_content_selection'), req.responseText);
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Get navigation related pages within page creation.
 * <br />
 * Fetch pages which are related to the choosen navigation
 * and apply the result to the page reference select 
 * 
 * @see #showResponseGetNavigationPages
 * @param {object} elem Provided element
 * @throws applyError on exception
 */
function Helper_getNavigationPages(elem)
{
	try {	
		var url = '../content/pages_navigation_pages.php';		
		var elem = elem;
		var elemVal = elem.options[elem.selectedIndex].value;
		var pars = 'navigation=' + elemVal;
		
		// assume hidden navigation field
		$('navigation').value = elemVal;
	
		var myAjax = new Ajax.Request(
			url,
			{
				method : 'get',
				parameters : pars,
				onComplete : Helper.showResponseGetNavigationPages
			});
			
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Get navigation related pages within page creation xhr response.
 * <br />
 * Populate select form element with provided pages 
 * 
 * @see #getNavigationPages
 * @param {object} req XHR response
 * @throws applyError on exception
 */
function Helper_showResponseGetNavigationPages(req)
{
	try {
			// init element
			var elem = $('page_pages');
			
			// update the select form element
			Element.update(elem, req.responseText);
		
			// assume hidden reference field
			if (req.responseText != '') {
				var ref = elem.options[elem.selectedIndex].value;
				$('reference').value = ref;
			} else {
				$('reference').value = '';
			}
	} catch (e) {
		_applyError(e);
	}	
}

/**
 * Get page id value and apply it to hidden reference field.
 * <br />
 * Populate select form element with provided pages 
 * 
 * @param {object} elem Provided element
 * @throws applyError on exception
 */
function Helper_setPageToReference(elem)
{
	try {		
		// get option value
		var ref = elem.options[elem.selectedIndex].value;		
		$('reference').value = ref;		
	} catch (e) {
		_applyError(e);
	}	
}


/**
 * Building new object instance of class Helper
 */
Helper = new Helper();
