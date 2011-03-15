(function ($) {
    $.fn.monthPicker = function () {
        return this.each(function () {
            var settings = {
                'numberOfYears': 10,
                'dayOfMonth': 1
            };

            var input = $(this);
            input.hide();

            var startDate = new Date();
            startDate = (input.val().length == 10) ? new Date(parseInt(input.val().substr(6)), parseInt(input.val().substr(3, 2)) - 1, parseInt(input.val().substr(0, 2))) : new Date();

            var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var thisYear = (new Date()).getFullYear();
            var startYear = startDate.getFullYear();
            var startMonth = startDate.getMonth();

            var monthSelectHtml = '<select id="' + this.id + '_months' + '">';
            for (var i = 0; i < 12; i++) {
                monthSelectHtml += '<option value="' + i + '"';
                if (i == startMonth) {
                    monthSelectHtml += ' selected="selected"';
                }
                monthSelectHtml += '>' + monthNames[i] + '</option>'
            }
            monthSelectHtml += '</select>';

            var yearSelectHtml = '<select id="' + this.id + '_years' + '">';
            for (var i = 0; i < settings.numberOfYears; i++) {
                var newYear = thisYear + i;
                yearSelectHtml += '<option value="' + newYear + '"'
                if (newYear == startYear) {
                    yearSelectHtml += ' selected="selected"';
                }
                yearSelectHtml += '>' + newYear + '</option>';
            }
            yearSelectHtml += '</select>';

            $('<div id="mp-monthpicker-container"><div class="md-monthpicker-selectors">' + monthSelectHtml + yearSelectHtml + '</div></div>').insertAfter(input);

            var monthSelect = $('#' + this.id + '_months');
            var yearSelect = $('#' + this.id + '_years');

            $(input.parent()).find('select').change(function () {
                var newDate = settings.dayOfMonth.padLeft(2, '0') + '/' + (parseInt(monthSelect.val()) + 1).padLeft(2, '0') + '/' + yearSelect.val();
                input.val(newDate);
            });
        });
    };
})(jQuery);