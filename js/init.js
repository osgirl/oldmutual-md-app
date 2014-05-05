// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$(document).ready(function(){

    $('.children').keyup(function() {
        var childrenAmount;

        if($(this).val() ) {
            // Store input value to variable
            childrenAmount = $(this).val();
            $('.children-container').empty();

            for(var i = 1; i <= childrenAmount; i++) {
                    //Implement the seperator
                    var seperator = '';

                    //Check if children should be plural or singular
                    if (childrenAmount == 1) {
                        if (window.lang == 'eng') {
                            $('.child').html('child.');
                            $('.has_children').html('My child\'s name is');
                        }
                        else {
                            $('.child').html('kind.');
                            $('.has_children').html('My kind se naam is');
                        }
                    }
                    if (childrenAmount > 1) {
                        
                        
                        if (window.lang == 'eng') {
                            $('.child').html('children.');
                            $('.has_children').html('Their names are:');
                        }
                        else {
                            $('.child').html('kinders.');
                            $('.has_children').html('Hulle name is');
                        }
                    }

                    if (childrenAmount == 2) {
                        if (window.lang == 'eng') {
                            seperator = '<p class="field-label">and</div>';
                        }
                        else {
                            seperator = '<p class="field-label">en</div>';
                        }
                    }

                    if (childrenAmount > 2) {
                        seperator = '<p class="field-label">,</div>';
                    };

                    if (i == (childrenAmount - 1)) {
                        if (window.lang == 'eng') {
                            seperator = '<p class="field-label">and</div>';
                        }
                        else {
                            seperator = '<p class="field-label">en</div>';
                        }
                    }

                    if ((i) == childrenAmount) {
                        seperator = '<p class="field-label">.</div>';
                    }

                    if (window.lang == 'eng') {
                        var childInput  = "<div class='child_"+i+"'>";
                            childInput += " <input type='text' name='child["+i+"][child_name]' class='child1 autosize' value='' placeholder='First Name' data-rule-required='true' />";
                            childInput += " <p class='field-label'>born on</p>";
                            childInput += " <input type='text' name='child["+i+"][birth_day]' maxlength='2' class='birthday number_only autosize' value='' placeholder='dd' data-rule-required='true' data-rule-range='[1, 31]' />";
                            childInput += " <input type='text' name='child["+i+"][birth_month]' maxlength='2' class='birthmonth number_only autosize' value='' placeholder='mm' data-rule-required='true' data-rule-range='[1, 12]' />";
                            childInput += " <input type='text' name='child["+i+"][birth_year]' maxlength='4' class='birthyear number_only autosize' value='' placeholder='yyyy' data-rule-required='true' data-rule-range='[1900, 2014]' />";
                            childInput +=   seperator;
                            childInput += "</div>";
                    }
                    else {
                        var childInput  = "<div class='child_"+i+"'>";
                            childInput += " <input type='text' name='child["+i+"][child_name]' class='child1 autosize' value='' placeholder='Voornaam' data-rule-required='true' />";
                            childInput += " <p class='field-label'>gebore op</p>";
                            childInput += " <input type='text' name='child["+i+"][birth_day]' maxlength='2' class='birthday number_only autosize' value='' placeholder='dd' data-rule-required='true' data-rule-range='[1, 31]' />";
                            childInput += " <input type='text' name='child["+i+"][birth_month]' maxlength='2' class='birthmonth number_only autosize' value='' placeholder='mm' data-rule-required='true' data-rule-range='[1, 12]' />";
                            childInput += " <input type='text' name='child["+i+"][birth_year]' maxlength='4' class='birthyear number_only autosize' value='' placeholder='jjjj' data-rule-required='true' data-rule-range='[1900, 2014]' />";
                            childInput +=   seperator;
                            childInput += "</div>";
                    }

                    

                    $('.children-container').append(childInput);

            }
            $('.has_children').show();
            $('.children-container').slideDown( "slow" );
            if (!$('html').hasClass('lt-ie9')) {
                $('input.autosize').autosizeInput();
            }
            initNumbersOnly()
            $('input, textarea').placeholder();
        }
        else{
            $('.children-container').hide();
            $('.children-container').empty();
            $('.has_children').hide();
        }
    });

    //Check switches
    $(document.body).on('click', '.option', function(event) {
        event.preventDefault();

        //remove possible error state
        $(this).parent().removeClass('select-error');

        var name  = $(this).data('name'),
            value = $(this).data('value');
        
        $(this).siblings('.option').removeClass('selected');
        $(this).addClass('selected');
        
        $("input[name='"+name+"']").val(value);

        //Show / hide partner details
        if (name == 'plus_one' && value === true) {
           
            if (window.lang == 'eng') {
                var html  = '<input type="text" name="plus_one_first_name" class="name autosize" value="" placeholder="First Name" data-autosize-input=\'{ "space": 1 }\' data-rule-required="true" />';
                    html += '<input type="text" name="plus_one_last_name" class="name autosize" value="" placeholder="Last Name" data-autosize-input=\'{ "space": 1 }\' data-rule-required="true" />';
                    html += '<p class="field-label">ID number </p>';
                    html += '<input type="text" name="plus_one_id" class="id_number" maxlength="13" value="" />';
                    html += '<p class="field-label">.</p>';
                    html += '<span class="plus_one_terms">By supplying your spouse / partner\'s ID number we can check if he / she is an Old Mutual policy holder and give you an additional entry into the prize draw.</span>';
            }
            else {
                var html  = '<input type="text" name="plus_one_first_name" class="name autosize" value="" placeholder="Voornaam" data-autosize-input=\'{ "space": 1 }\' data-rule-required="true" />';
                    html += '<input type="text" name="plus_one_last_name" class="name autosize" value="" placeholder="Van" data-autosize-input=\'{ "space": 1 }\' data-rule-required="true" />';
                    html += '<p class="field-label">ID-nommer </p>';
                    html += '<input type="text" name="plus_one_id" class="id_number" maxlength="13" value="" />';
                    html += '<p class="field-label">.</p>';
                    html += '<span class="plus_one_terms">Deur u eggenoot/lewensmaat se ID-nommer te verstrek, kan ons vasstel of hy/sy ’n Old Mutual-polishouer is en u ’n bykomende inskrywing vir die prystrekking gee.</span>';
                $('.grammer').html('saambring.');
            }

            
            $('.plus_one_details').html(html).slideDown( "slow" );
            if (!$('html').hasClass('lt-ie9')) {
                $('input.autosize').autosizeInput();
            }
            $('input, textarea').placeholder();
            initNumbersOnly()
        }
        else if (name == 'plus_one' && value === false) {
            $('.plus_one_details').slideUp( "slow", function(){
                $(this).empty();
            });   
            $('.grammer').html('saambring nie.');
        }

        if (window.lang == 'afr') {
        }
        
        //Show / hide dietary requirements options
        if (name == 'dietary_requirement' && value === true) {
            if (window.lang == 'eng') {
                var html  = '<span class="check_select">'
                    html += '    <span class="option" data-name="dietary_requirement_type" data-value="vegetarian">Vegetarian</span> /'; 
                    html += '    <span class="option" data-name="dietary_requirement_type" data-value="kosher">Kosher</span> /';
                    html += '    <span class="option" data-name="dietary_requirement_type" data-value="halaal">Halaal</span> /';
                    html += '    <span class="option" data-name="dietary_requirement_type" data-value="other">Other</span>';
                    html += '</span>'; 
            }
            else {
                var html  = '<span class="check_select">'
                    html += '    <span class="option" data-name="dietary_requirement_type" data-value="vegetarian">Vegetaries</span> /'; 
                    html += '    <span class="option" data-name="dietary_requirement_type" data-value="kosher">Kosjer</span> /';
                    html += '    <span class="option" data-name="dietary_requirement_type" data-value="halaal">Halaal</span> /';
                    html += '    <span class="option" data-name="dietary_requirement_type" data-value="other">Ander</span>';
                    html += '</span>';
            }
            
            $('.dietary_requirements').html(html).slideDown( "slow" );
            $('.grammer2').html('spesiale dieetvereistes.');
            $('input, textarea').placeholder();
        }
        else if (name == 'dietary_requirement' && value === false) {
            $('.dietary_requirements').slideUp( "slow", function(){
                $(this).empty();
            });
            $('.grammer2').html('spesiale dieetvereistes nie.');
        }
    });

    // Expand/contract text inputs based on their content
    if (!$('html').hasClass('lt-ie9')) {
        $('input.autosize').autosizeInput();
    }
    $('input, textarea').placeholder();
    initNumbersOnly()
    $('input').iCheck();

    $('form').validate({
        ignore: "",
        rules: {
            birthday: {
                required: true,
                range: [1, 31]
            },
            birthmonth: {
                required: true,
                range: [1, 12]
            },
            birthyear: {
                required: true,
                range: [1900, 2014]
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "plus_one" ) {
                $('[data-name="plus_one"]').parent().addClass('select-error');
            }
            else if  (element.attr("name") == "dietary_requirement" ) {
                $('[data-name="dietary_requirement"]').parent().addClass('select-error');
            }
            else if (element.attr("name") == "travel_together" ) {
                $('[data-name="travel_together"]').parent().addClass('select-error');
            }
            else if (element.attr("name") == "terms") {
                console.log('jere');
                $('.icheckbox').addClass('error');
            }
            else {
                return false;
            }
        }
    });
});

function initNumbersOnly() {
    //Only allow number input
    $(".number_only").on('keydown', function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
}
