/*
 * jQuery (ASP.NET) Validator Callout plugin
 *   http://updatepanel.net/2009/04/19/jquery-aspnet-validator-callout-plugin/
 *
 * Copyright (c) 2009 Ting Zwei Kuei
 *
 * Dual licensed under the MIT and GPL licenses.
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.opensource.org/licenses/gpl-3.0.html
 */
(function($) {
    $.fn.updnValidatorCallout = function(options) {
        // Prepare options.
        options = $.extend({}, $.fn.updnValidatorCallout.defaults, options);
        // Currently open callout.
        var _current = null;
        // Overrides ValidatorOnChange in WebUIValidation.js to ensure input and label styles are updated.
        if (window.ValidatorOnChange && !window._ValidatorOnChange) {
            window._ValidatorOnChange = window.ValidatorOnChange;
            window.ValidatorOnChange = function(ev) {
                window._ValidatorOnChange(ev);
                ev = $.event.fix(ev); // Normalizes browser event object.
                var $input = $(ev.target);
                // Selects all labels associated with the input element.
                var $label = $("label[for='" + $input.attr("id") + "']");
                var $callout = $input.data("callout");
                var vals = $input.attr("Validators");
                if (window.AllValidatorsValid && window.AllValidatorsValid(vals)) {
                    if ($input.hasClass(options.errorInputCssClass)) {
                        $input.removeClass(options.errorInputCssClass);
                        $label.removeClass(options.errorLabelCssClass);
                    }
                    if ($callout) {
                        $callout.trigger("close");
                    }
                } else {
                    if (!$input.hasClass(options.errorInputCssClass)) {
                        $input.addClass(options.errorInputCssClass);
                        $label.addClass(options.errorLabelCssClass);
                    }
                    if ($callout) {
                        $callout.trigger("open");
                    }
                }
            };
        }
        // Plugin implementation.
        return this.each(function() {
            var val = this;
            // Only create callout if controltovalidate has a value.
            if (this.controltovalidate && this.innerHTML != "") {
                var $input = $(document.getElementById(this.controltovalidate));
                // Create a separate callout for each input element.
                var $callout = $input.data("callout");
                if (!$callout) {
                    $callout = $("<div/>")
                        .appendTo(document.body)
                        .addClass(options.calloutCssClass)
                        .hide()
                        .bind("open", function(ev) {
                            if (_current) {
                                _current.trigger("close");
                            }
                            var pos = $input.position();
                            _current = $(this).css({
                                position: "absolute",
                                left: Math.floor(pos.left + $input.outerWidth() + options.offsetX),
                                top: Math.floor(pos.top + options.offsetY)
                                //}).fadeIn("fast");
                            });

                            //$(this).fadeIn("fast");
                            $(this).toggle();
                        })
                        .bind("close", function(ev) {
                            $(this).hide();
                            _current = null;
                        });
                    // Add callout pointer
                    $("<span/>").appendTo($callout).addClass(options.pointerCssClass);
                }
                // Move validator inside of callout.
                $callout.append(this);
                // Force "SetFocusOnError" property of the validator to true.
                // This will display the callout for the first validator in error state.
                this.focusOnError = "t";
                // Open callout when input element gains focus.
                $input.focus(function(ev) {
                    if (!val.isvalid) {
                        $callout.trigger("open");
                    }
                });
                // Associate the callout element with the validator.
                $input.data("callout", $callout);
                // Helper function to open/close callout and add/remove error state styles.
                var updateDisplay = function(isValid) {
                    // For non-IE browsers, ValidatorUpdateDisplay sets visibility to
                    // show/hide validators, so I use jQuey toggle to set display as well.
                    $(val).toggle(!isValid);
                    // Selects all labels associated with the input element.
                    var $label = $("label[for='" + $input.attr("id") + "']");
                    if (!isValid) {
                        if (!$input.hasClass(options.errorInputCssClass)) {
                            $input.addClass(options.errorInputCssClass);
                            $label.addClass(options.errorLabelCssClass);
                        }
                        if (!_current) {
                            $callout.trigger("open");
                        }
                    } else {
                        var vals = $input.attr("Validators");
                        if (window.AllValidatorsValid && window.AllValidatorsValid(vals)) {
                            if ($input.hasClass(options.errorInputCssClass)) {
                                $input.removeClass(options.errorInputCssClass);
                                $label.removeClass(options.errorLabelCssClass);
                            }
                            $callout.trigger("close");
                        }
                    }
                };
                // Overrides evaluationfunction of each validator to update
                // input and label styles according to the validation result.
                if (this.evaluationfunction) {
                    var _evaluationfunction = this.evaluationfunction;
                    this.evaluationfunction = function(val) {
                        var isValid = _evaluationfunction(val);
                        updateDisplay(isValid);
                        return isValid;
                    };
                }
                // Set initial state.
                updateDisplay(val.isvalid);
            }
        });
    };
    $.fn.updnValidatorCallout.defaults = {
        calloutCssClass: "updnValidatorCallout",
        pointerCssClass: "updnValidatorCalloutPointer",
        errorInputCssClass: "updnValidationErrorInput",
        errorLabelCssClass: "updnValidationErrorLabel",
        offsetX: 0,
        offsetY: 0
    };
    $.updnValidatorCallout = {
        attachAll: function(options) {
            if (window.Page_Validators) {
                $(window.Page_Validators).updnValidatorCallout(options);
            }
        }
    };

})(jQuery);