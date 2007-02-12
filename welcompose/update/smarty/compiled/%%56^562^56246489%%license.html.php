<?php /* Smarty version 2.6.14, created on 2007-02-11 10:45:01
         compiled from license.html */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" lang="de">
 <head>
  <meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
  <meta name="language" content="de" />
  <meta name="MSSmartTagsPreventParsing" content="true" />
  <meta http-equiv="imagetoolbar" content="no" /> 
  <title>Welcompose Update</title>
  <link rel="stylesheet" type="text/css" href="static/styles/setup.css" media="screen, projection" />

<script type="text/javascript" src="static/libs/thirdparty/prototype.js"></script>
<script type="text/javascript" src="static/libs/thirdparty/scriptaculous.js"></script>
<script type="text/javascript" src="static/libs/thirdparty/behaviours.js"></script>
<script type="text/javascript" src="parse/parse.js.php?file=wcom.setup.strings.js"></script>
<script type="text/javascript" src="static/libs/wcom.setup.core.js"></script>
<script type="text/javascript" src="static/libs/wcom.setup.helper.js"></script>
<script type="text/javascript" src="static/libs/wcom.setup.events.js"></script>
<script type="text/javascript" src="static/libs/wcom.setup.validation.js"></script>

</head>

<body>
<div id="container">

<div id="header"> 

<div id="logo">
<p><?php 
			$map = 'a:0:{}';
			Smarty_GettextHelper::$map = unserialize(stripslashes($map));
			$printf_args = array();
		
			$translated = gettext(stripslashes('Welcompose Update'));
			$prepared = preg_replace_callback('=`%([a-z0-9_.\x3a]+?)`=i',
			    array('Smarty_GettextHelper', 'preg_translator_callback'), $translated);
			ksort($printf_args);
			vprintf($prepared, $printf_args);
		 ?></p>
<!-- logo --></div>

<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "_inc_navigation.html", 'smarty_include_vars' => array('on' => 'license')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>

<!-- header --></div>

<div id="content">

<h1>License</h1>
<p>Please read the license carefully and confirm to go on.</p>

<?php if (! empty ( $this->_tpl_vars['form']['errors'] )): ?>
<div id="error">
<ul class="req">
<?php $_from = $this->_tpl_vars['form']['errors']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['error']):
?>
	<li><?php echo $this->_tpl_vars['error']; ?>
</li>
<?php endforeach; endif; unset($_from); ?>
</ul>
<!-- error --></div>
<?php endif; ?>

<form class="botbg"<?php echo $this->_tpl_vars['form']['attributes']; ?>
>
<?php echo $this->_tpl_vars['form']['javascript']; ?>


<fieldset class="topbg">

<?php echo $this->_tpl_vars['form']['hidden']; ?>



<div id="licence">
<h2>Open Software License (&quot;OSL&quot;) v. 3.0</h2>

<p>This Open Software License (the &quot;License&quot;) applies to any
original work of authorship (the &quot;Original Work&quot;) whose owner (the
&quot;Licensor&quot;) has placed the following licensing notice adjacent to
the copyright notice for the Original Work:</p>

<p><strong>Licensed under the Open Software License version 3.0</strong></p>

<ol>
<li><strong>Grant of Copyright License</strong>. Licensor grants You a worldwide,
royalty-free, non-exclusive, sublicensable license, for the duration of the
copyright, to do the following:

<ol>
<li>to reproduce the Original Work in copies, either alone or as part of a
collective work;</li>
<li>to translate, adapt, alter, transform, modify, or arrange the Original
Work, thereby creating derivative works (&quot;Derivative Works&quot;) based
upon the Original Work;</li>
<li>to distribute or communicate copies of the Original Work and Derivative
Works to the public, <span>with the proviso
that copies of Original Work or Derivative Works that You distribute or
communicate shall be licensed under this Open Software License</span>;</li>
<li>to perform the Original Work publicly; and</li>
<li>to display the Original Work publicly.</li>
</ol>

</li>

<li><strong>Grant of Patent License</strong>. Licensor grants You a worldwide,
royalty-free, non-exclusive, sublicensable license, under patent claims owned
or controlled by the Licensor that are embodied in the Original Work as
furnished by the Licensor, for the duration of the patents, to make, use,
sell, offer for sale, have made, and import the Original Work and Derivative
Works.</li>

<li><strong>Grant of Source Code License</strong>. The term &quot;Source
Code&quot; means the preferred form of the Original Work for making
modifications to it and all available documentation describing how to modify
the Original Work. Licensor agrees to provide a machine-readable copy of the
Source Code of the Original Work along with each copy of the Original Work
that Licensor distributes. Licensor reserves the right to satisfy this
obligation by placing a machine-readable copy of the Source Code in an
information repository reasonably calculated to permit inexpensive and
convenient access by You for as long as Licensor continues to distribute the
Original Work.</li>

<li><strong>Exclusions From License Grant</strong>. Neither the names of
Licensor, nor the names of any contributors to the Original Work, nor any of
their trademarks or service marks, may be used to endorse or promote products
derived from this Original Work without express prior permission of the
Licensor. Except as expressly stated herein, nothing in this License grants
any license to Licensor's trademarks, copyrights, patents, trade secrets or
any other intellectual property. No patent license is granted to make, use,
sell, offer for sale, have made, or import embodiments of any patent claims
other than the licensed claims defined in Section 2. No license is granted to
the trademarks of Licensor even if such marks are included in the Original
Work. Nothing in this License shall be interpreted to prohibit Licensor from
licensing under terms different from this License any Original Work that
Licensor otherwise would have a right to license.</li>

<li><strong>External Deployment</strong>. The term &quot;External
Deployment&quot; means the use, distribution, or communication of the Original
Work or Derivative Works in any way such that the Original Work or Derivative
Works may be used by anyone other than You, whether those works are
distributed or communicated to those persons or made available as an
application intended for use over a network. As an express condition for the
grants of license hereunder, You must treat any External Deployment by You of
the Original Work or a Derivative Work as a distribution under section
1(c).</li>

<li><strong>Attribution Rights</strong>. You must retain, in the Source Code
of any Derivative Works that You create, all copyright, patent, or trademark
notices from the Source Code of the Original Work, as well as any notices of
licensing and any descriptive text identified therein as an &quot;Attribution
Notice.&quot; You must cause the Source Code for any Derivative Works that You
create to carry a prominent Attribution Notice reasonably calculated to inform
recipients that You have modified the Original Work.</li>

<li><strong>Warranty of Provenance and Disclaimer of Warranty</strong>.
Licensor warrants that the copyright in and to the Original Work and the
patent rights granted herein by Licensor are owned by the Licensor or are
sublicensed to You under the terms of this License with the permission of the
contributor(s) of those copyrights and patent rights. Except as expressly
stated in the immediately preceding sentence, the Original Work is provided
under this License on an &quot;AS IS&quot; BASIS and WITHOUT WARRANTY, either
express or implied, including, without limitation, the warranties of
non-infringement, merchantability or fitness for a particular purpose. THE
ENTIRE RISK AS TO THE QUALITY OF THE ORIGINAL WORK IS WITH YOU. This
DISCLAIMER OF WARRANTY constitutes an essential part of this License. No
license to the Original Work is granted by this License except under this
disclaimer.</li>

<li><strong>Limitation of Liability</strong>. Under no circumstances and under
no legal theory, whether in tort (including negligence), contract, or
otherwise, shall the Licensor be liable to anyone for any indirect, special,
incidental, or consequential damages of any character arising as a result of
this License or the use of the Original Work including, without limitation,
damages for loss of goodwill, work stoppage, computer failure or malfunction,
or any and all other commercial damages or losses. This limitation of
liability shall not apply to the extent applicable law prohibits such
limitation.</li>

<li><strong>Acceptance and Termination</strong>. If, at any time, You
expressly assented to this License, that assent indicates your clear and
irrevocable acceptance of this License and all of its terms and conditions. If
You distribute or communicate copies of the Original Work or a Derivative
Work, You must make a reasonable effort under the circumstances to obtain the
express assent of recipients to the terms of this License. This License
conditions your rights to undertake the activities listed in Section 1,
including your right to create Derivative Works based upon the Original Work,
and doing so without honoring these terms and conditions is prohibited by
copyright law and international treaty. Nothing in this License is intended to
affect copyright exceptions and limitations (including 'fair use' or 'fair
dealing'). This License shall terminate immediately and You may no longer
exercise any of the rights granted to You by this License upon your failure to
honor the conditions in Section 1(c).</li>

<li><strong>Termination for Patent Action</strong>. This License shall
terminate automatically and You may no longer exercise any of the rights
granted to You by this License as of the date You commence an action,
including a cross-claim or counterclaim, against Licensor or any licensee
alleging that the Original Work infringes a patent. This termination provision
shall not apply for an action alleging patent infringement by combinations of
the Original Work with other software or hardware.</li>

<li><strong>Jurisdiction, Venue and Governing Law</strong>. Any action or suit
relating to this License may be brought only in the courts of a jurisdiction
wherein the Licensor resides or in which Licensor conducts its primary
business, and under the laws of that jurisdiction excluding its
conflict-of-law provisions. The application of the United Nations Convention
on Contracts for the International Sale of Goods is expressly excluded. Any
use of the Original Work outside the scope of this License or after its
termination shall be subject to the requirements and penalties of copyright or
patent law in the appropriate jurisdiction. This section shall survive the
termination of this License.</li>

<li><strong>Attorneys Fees</strong>. In any action to enforce the terms of
this License or seeking damages relating thereto, the prevailing party shall
be entitled to recover its costs and expenses, including, without limitation,
reasonable attorneys' fees and costs incurred in connection with such action,
including any appeal of such action. This section shall survive the
termination of this License.</li>

<li><strong>Miscellaneous</strong>. If any provision of this License is held
to be unenforceable, such provision shall be reformed only to the extent
necessary to make it enforceable.</li>

<li><strong>Definition of &quot;You&quot; in This License</strong>.
&quot;You&quot; throughout this License, whether in upper or lower case, means
an individual or a legal entity exercising rights under, and complying with
all of the terms of, this License. For legal entities, &quot;You&quot;
includes any entity that controls, is controlled by, or is under common
control with you. For purposes of this definition, &quot;control&quot; means
(i) the power, direct or indirect, to cause the direction or management of
such entity, whether by contract or otherwise, or (ii) ownership of fifty
percent (50%) or more of the outstanding shares, or (iii) beneficial ownership
of such entity.</li>

<li><strong>Right to Use</strong>. You may use the Original Work in all ways
not otherwise restricted or conditioned by this License or by law, and
Licensor promises not to interfere with or be responsible for such uses by
You.</li>

<li><strong>Modification of This License</strong>. This License is Copyright
&copy; 2005 Lawrence Rosen. Permission is granted to copy, distribute, or
communicate this License without modification. Nothing in this License permits
You to modify this License as applied to the Original Work or to Derivative
Works. However, You may modify the text of this License and copy, distribute
or communicate your modified version (the &quot;Modified License&quot;) and
apply it to other original works of authorship subject to the following
conditions: (i) You may not indicate in any way that your Modified License is
the &quot;Open Software License&quot; or &quot;OSL&quot; and you may not use
those names in the name of your Modified License; (ii) You must replace the
notice specified in the first paragraph above with the notice &quot;Licensed
under &quot; or with a notice of your own that is not confusingly similar to
the notice in this License; and (iii) You may not claim that your original
works are open source software unless your Modified License has been approved
by Open Source Initiative (OSI) and You comply with its license review and
certification process.</li>
</ol>
</div>

<label class="cont" for="license_confirm_license"><span class="bez"><?php echo $this->_tpl_vars['form']['confirm_license']['label']; ?>
<span class="iHelp"><a href="#" title="<?php 
			$map = 'a:0:{}';
			Smarty_GettextHelper::$map = unserialize(stripslashes($map));
			$printf_args = array();
		
			$translated = gettext(stripslashes('Show help on this topic'));
			$prepared = preg_replace_callback('=`%([a-z0-9_.\x3a]+?)`=i',
			    array('Smarty_GettextHelper', 'preg_translator_callback'), $translated);
			ksort($printf_args);
			vprintf($prepared, $printf_args);
		 ?>"><img src="static/img/icons/help.gif" alt="" /></a></span></span>
<?php echo $this->_tpl_vars['form']['confirm_license']['html']; ?>
</label>

<?php echo $this->_tpl_vars['form']['submit']['html']; ?>


</fieldset>
</form>

<!-- content --></div>

<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "_inc_footer.html", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
<!-- container --></div>
</body>
</html>