<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<title>Old Mutual</title>

<meta name="description" content="">
<meta name="viewport" content="width=device-width">

<link rel="stylesheet" href="css/screen.css">

<!-- For iframe links -->
<base target="_parent" />

<script src="js/modernizr-2.6.2.min.js"></script>
<script>
    window.lang = "eng";
</script>
</head>

<body>
<!--[if lt IE 8]>
    <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif]-->

<div class="header">
    <div class="container_105">
        <div class="grid_105">
            <h1 class="old-mutual">Old Mutual</h1>
            <h2 class="headline">Answer a few questions so that the appropriate accommodation can be sourced and organised.</h2>
            <h3 class="subheadline">We ensure you that the information you supply is strictly confidential.</h3>
        </div>
    </div>
</div>
<div class="content">
    <div class="container_105">
        <div class="grid_105 form-container">
            <form action="process.php" method="post">
                <fieldset>
                    <p class="field-label">My name is</p>
                    <input type="text" name="first_name" class="name autosize" value="" placeholder="First Name" data-autosize-input='{ "space": 1 }' data-rule-required="true" />
                    <input type="text" name="last_name" class="last_name autosize" value="" placeholder="Last Name" data-autosize-input='{ "space": 1 }' data-rule-required="true" />
                    <p class="field-label">and I was born on</p>
                    <input type="text" name="birthday" class="birthday autosize number_only" maxlength="2" value="" placeholder="dd" data-autosize-input='{ "space": 1 }' />
                    <input type="text" name="birthmonth" class="birthmonth autosize number_only" maxlength="2" value="" placeholder="mm" data-autosize-input='{ "space": 1 }' />
                    <input type="text" name="birthyear" class="birthyear autosize number_only" maxlength="4" value="" placeholder="yyyy" data-autosize-input='{ "space": 1 }' />
                    <p class="field-label">.</p>
                    <!-- Hidden values -->
                    <input type="hidden" name="plus_one" value="" data-rule-required="true" />
                    <input type="hidden" name="plus_one_type" value="none" />
                    <input type="hidden" name="dietary_requirement" value="" data-rule-required="true" />
                    <input type="hidden" name="dietary_requirement_type" value="none" />
                    <input type="hidden" name="travel_together" value=""  data-rule-required="true" />
                    <input type="hidden" name="gscid" value="<?php if (isset($_GET['gscid'])) { echo $_GET['gscid']; } ?>">
                    <input type="hidden" name="lang" value="eng">
                </fieldset>

                
                <fieldset class="children-trigger">
                    <p class="field-label">If I win I</p>
                    <span class="check_select">
                        <span class="option" data-name="plus_one" data-value="true">will</span> / <span class="option" data-name="plus_one" data-value="false">will not</span>
                    </span>
                    <p class="field-label">bring my </p>
                    <span class="check_select">
                        <span class="option" data-name="plus_one_type" data-value="spouse">spouse</span> / <span class="option" data-name="plus_one_type" data-value="partner">partner</span>
                    </span>
                    
                    <div class="plus_one_details"></div>

                    <p class="field-label">I have</p>
                    
                    <input type="text" name="children" class="children autosize" id='children' maxlength="1" value="" placeholder="0" >
                    <p class="field-label"><span class="child">children.</span> <span class="has_children">Their names are</span></p>
                </fieldset>

                <fieldset class='children-container' style='display:none;'></fieldset>

                <fieldset>
                    <p class="field-label">If I win, they </p>
                    <span class="check_select">
                        <span class="option" data-name="travel_together" data-value="true">will</span> / <span class="option" data-name="travel_together" data-value="false">will not</span>
                    </span>
                    <p class="field-label">be travelling with me.</p>
                </fieldset>

                <fieldset>
                    <p class="field-label">I</p>
                    <span class="check_select">
                        <span class="option" data-name="dietary_requirement" data-value="true">have</span> / <span class="option" data-name="dietary_requirement" data-value="false">do not have</span>
                    </span>
                    <p class="field-label">a special dietary requirement.</p>
                    <div class="dietary_requirements"></div>
                </fieldset>

                <fieldset>
                    <input type="checkbox" name="terms" value="agreed" data-rule-required="true" />
                    <p class="field-label checkbox">I agree to the <a target="_blank" href="om-terms-and-conditions.pdf">Terms &amp; Conditions</a></p>
                </fieldset>

                <fieldset>
                    <input type="submit" value="" class="form-button">
                </fieldset>    
            </form>
        </div> 
        <div class="clear">&nbsp;</div>
    </div>
</div>
<div class="footervisual">
    <div class="footer_img"></div>
    <div class="footer_infinate"></div>
</div>
<div class="footer">
    <div class="container_105">
        <div class="grid_105">
            <ul class="clearfix">
                <li><a target="_blank" href="http://www.oldmutual.co.za/about-us/governance/privacy-policy.aspx">Privacy Policy</a></li>
                <li><a target="_blank" href="http://www.oldmutual.co.za/about-us/governance/disclaimer.aspx">Disclaimer</a></li>
                <li><a target="_blank" href="http://www.oldmutual.co.za/about-us/governance/company-information.aspx">Company Information</a></li>
                <li><a target="_blank" class="omega" href="om-terms-and-conditions.pdf">Terms &amp; Conditions</a></li>
            </ul>
        </div>
        <div class="clear">&nbsp;</div>
    </div>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
<!--[if !IE || gte IE 9]><!-->
    <script src="js/jquery.autosize.input.js"></script>
<!-- <![endif]-->
<script src="js/jquery.validate.min.js"></script>
<script src="js/jquery.placeholder.js"></script>
<script src="js/icheck.min.js"></script>
<script src="js/init.js"></script>
</body>
</html>