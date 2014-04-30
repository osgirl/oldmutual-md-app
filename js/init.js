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
    // Init Plugins

    $('.children').keyup(function() {
        var childrenAmount;

        if($(this).val() ) {
            // Store input value to variable
            childrenAmount = $(this).val();
            $('.children-container').empty();

            console.log(childrenAmount);
            
            for(var i = 1; i <= childrenAmount; i++) {
                    //Implement the seperator
                    var seperator = '';

                    if (childrenAmount == 2) {
                        seperator = '<p class="field-label">and</div>';
                    }

                    if (childrenAmount > 2) {
                        seperator = '<p class="field-label">,</div>';
                    };

                    if (i == (childrenAmount - 1)) {
                        console.log('here');
                        seperator = '<p class="field-label">and</div>';
                    }

                    if ((i) == childrenAmount) {
                        seperator = '';
                    }

                    var childInput  = "<div class='child_"+i+"'>";
                        childInput += " <input type='text' name='child["+i+"][child_name]' class='child1 autosize' value='' placeholder='First Name' data-rule-required='true' />";
                        childInput += " <p class='field-label'>born on</p>";
                        childInput += " <input type='text' name='child["+i+"][birth_day]' maxlength='2' class='birthday number_only autosize' value='' placeholder='dd' data-rule-required='true' data-rule-range='[1, 31]' />";
                        childInput += " <input type='text' name='child["+i+"][birth_month]' maxlength='2' class='birthmonth number_only autosize' value='' placeholder='mm' data-rule-required='true' data-rule-range='[1, 12]' />";
                        childInput += " <input type='text' name='child["+i+"][birth_year]' maxlength='4' class='birthyear number_only autosize' value='' placeholder='yy' data-rule-required='true' />";
                        childInput +=   seperator;
                        childInput += "</div>";

                    $('.children-container').append(childInput);

            }

            $('.children-container').slideDown( "slow" );
            $('input.autosize').autosizeInput();
            //data-rule-required="true"lidate();
            initNumbersOnly()
        }
        else{
            $('.children-container').slideUp( "slow", function(){
                $(this).empty();
                //data-rule-required="true"lidate();
            });
        }
    });

    //Check switches
    $(document.body).on('click', '.option', function(event) {
        event.preventDefault();

        var name  = $(this).data('name'),
            value = $(this).data('value');

            console.log(value);
        
        $(this).siblings('.option').removeClass('selected');
        $(this).addClass('selected');
        
        $("input[name='"+name+"']").val(value);

        //Show / hide partner details
        if (name == 'plus_one' && value === true) {
            var html  = '<input type="text" name="plus_one_first_name" class="name autosize" value="" placeholder="First Name" data-autosize-input=\'{ "space": 1 }\' data-rule-required="true" />';
                html += '<input type="text" name="plus_one_last_name" class="name autosize" value="" placeholder="Last Name" data-autosize-input=\'{ "space": 1 }\' data-rule-required="true" />';
                html += '<p class="field-label">ID number </p>';
                html += '<input type="text" name="plus_one_id" class="id_number" maxlength="13" value="" />';
            $('.spouse_details').html(html).slideDown( "slow" );
            $('input.autosize').autosizeInput();
            //data-rule-required="true"lidate();
            initNumbersOnly()
        }
        else if (name == 'plus_one' && value === false) {
            $('.spouse_details').slideUp( "slow", function(){
                $(this).empty();
                //data-rule-required="true"lidate();
            });
            
        }
        
        //Show / hide dietary requirements options
        if (name == 'dietary_requirement' && value === true) {
            var html  = '<span class="check_select">'
                html += '    <span class="option" data-name="dietary_requirement_type" data-value="vegetarian">Vegetarian</span> /'; 
                html += '    <span class="option" data-name="dietary_requirement_type" data-value="kosher">Kosher</span> /';
                html += '    <span class="option" data-name="dietary_requirement_type" data-value="halaal">Halaal</span>';
                html += '</span>';

            $('.dietary_requirements').html(html).slideDown( "slow" );
        }
        else if (name == 'dietary_requirement' && value === false) {
            $('.dietary_requirements').slideUp( "slow", function(){
                $(this).empty();
                //data-rule-required="true"lidate();
            });
        }
    });

    // Expand/contract text inputs based on their content
    $('input.autosize').autosizeInput();
    initNumbersOnly()
    //data-rule-required="true"lidate();

    $('form').validate({
        rules: {
            birthday: {
                required: true,
                range: [1, 31]
            },
            birthmonth: {
                required: true,
                range: [1, 12]
            }
        },
        errorPlacement: function(error, element) {
            return false;
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
