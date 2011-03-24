/*
* 	Month Picker Plugin - jQuery plugin
* 	Simply generates 2 drop down lists as a mask for a text box with a date in it
*	written by Phil Peace
*	http://codepeace.blogspot.com/
*
*	Copyright (c) 2011 Phil Peace (http://codepeace.blogspot.com)
*	Dual licensed under the MIT (MIT-LICENSE.txt)
*	and GPL (GPL-LICENSE.txt) licenses.
*
*	Built for jQuery library - Tested on v1.4.x and v1.5.x
*	http://jquery.com
*
*/

(function ($) {
    $.fn.monthPicker = function () {
        return this.each(function () {
            var settings = {
                'numberOfYears': 10,
                'startYearOffset': -2,
                'dayOfMonth': 1,
                'changed': $.noop
            };

            var input = $(this);
            input.hide();
            var id = input.attr('id');
            var startDate = new Date(); // Assumes UK date format: dd/MM/yyyy
            startDate = (input.val().length == 10) ? new Date(parseInt(input.val().substr(6), 10), parseInt(input.val().substr(3, 2), 10) - 1, parseInt(input.val().substr(0, 2), 10)) : new Date();

            var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var thisYear = (new Date()).getFullYear();
            var startYear = startDate.getFullYear();
            var startMonth = startDate.getMonth();

            var monthSelectHtml = '<select id="' + id + '_months" name="' + id + '_months">';
            for (var i = 0; i < 12; i++) {
                monthSelectHtml += '<option value="' + i + '"';
                if (i == startMonth) {
                    monthSelectHtml += ' selected="selected"';
                }
                monthSelectHtml += '>' + monthNames[i] + '</option>'
            }
            monthSelectHtml += '</select>';

            var yearSelectHtml = '<select id="' + id + '_years' + '">';
            var numYears = settings.numberOfYears + (settings.startYearOffset * -1);
            var startYearIndex = settings.startYearOffset;
            for (var i = startYearIndex; i < numYears; i++) {
                var newYear = thisYear + i;
                yearSelectHtml += '<option value="' + newYear + '"'
                if (newYear == startYear) {
                    yearSelectHtml += ' selected="selected"';
                }
                yearSelectHtml += '>' + newYear + '</option>';
            }
            yearSelectHtml += '</select>';

            $('<div id="mp-monthpicker-container"><div class="mp-monthpicker-selectors">' + monthSelectHtml + yearSelectHtml + '</div></div>').insertAfter(input);

            var monthSelect = $('#' + id + '_months');
            var yearSelect = $('#' + id + '_years');

            var newDateStr = settings.dayOfMonth.padLeft(2, '0') + '/' + (parseInt(monthSelect.val()) + 1).padLeft(2, '0') + '/' + yearSelect.val();
            input.attr("value", newDateStr);

            monthSelect.change({ i: '#' + id }, function (event) {
                var newDateStr = settings.dayOfMonth.padLeft(2, '0') + '/' + (parseInt(monthSelect.val()) + 1).padLeft(2, '0') + '/' + yearSelect.val();
                $(event.data.i).val(newDateStr);

                var sp = newDateStr.split('/');
                var newDate = new Date(sp[2], parseInt(sp[1]) - 1, sp[0]);
                settings.changed(newDate);
            });
            yearSelect.change({ i: '#' + id }, function (event) {
                var newDateStr = settings.dayOfMonth.padLeft(2, '0') + '/' + (parseInt(monthSelect.val()) + 1).padLeft(2, '0') + '/' + yearSelect.val();
                $(event.data.i).val(newDateStr);

                var sp = newDateStr.split('/');
                var newDate = new Date(sp[2], parseInt(sp[1]) - 1, sp[0]);
                settings.changed(newDate);
            });
        });
    };
})(jQuery);