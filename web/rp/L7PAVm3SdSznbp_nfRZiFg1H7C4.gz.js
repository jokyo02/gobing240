/// <reference path="../../../../../Shared/Content/Content/Script/Declarations/Shared.d.ts" />
/// <reference path="../../../../../Shared/Content/Content/Script/Declarations/CssClass.d.ts" />
var WelcomeScreenBold;
(function (WelcomeScreenBold) {
    var SLIDE_BAR_SELECTOR = "#sydChatFreTemplate .b_slideexp .b_slidebar";
    var IS_RTL = _G.RTL;
    var PREV_CHEVRON_SELCTOR = "#sydChatFreTemplate .zpcarousel .b_overlay .btn.prev.rounded";
    var NEXT_CHEVRON_SELCTOR = "#sydChatFreTemplate .zpcarousel .b_overlay .btn.next.rounded";
    var HIDDEN_CLASS = "hidden";
    var DISABLED_CLASS = "disabled";
    var ARIA_HIDDEN = "aria-hidden";
    var MARGIN_LEFT = "margin-left";
    var MARGIN_RIGHT = "margin-right";
    var INITIAL_MARGIN_LEFT = -205;
    /**
     * Chevrons are initially hiddenon shared control carousel.
     * This method makes them always visible
     */
    function showChevronAlways() {
        var prevChevron = sj_b.querySelector(PREV_CHEVRON_SELCTOR);
        if (prevChevron) {
            Lib.CssClass.remove(prevChevron, HIDDEN_CLASS);
            Lib.CssClass.remove(prevChevron, DISABLED_CLASS);
        }
        var nextChevron = sj_b.querySelector(NEXT_CHEVRON_SELCTOR);
        if (nextChevron) {
            Lib.CssClass.remove(nextChevron, HIDDEN_CLASS);
            Lib.CssClass.remove(nextChevron, DISABLED_CLASS);
        }
    }
    function handleResize(slideBar) {
        sj_be(_w, "resize", function () {
            setMargin(slideBar);
        });
    }
    /**
     * Sets the margin of the slideBar based on screen width
     * @param slideBar
     * @returns void
     */
    function setMargin(slideBar) {
        if (_w.innerWidth > 1204) {
            slideBar.style[IS_RTL ? MARGIN_RIGHT : MARGIN_LEFT] = INITIAL_MARGIN_LEFT + "px";
            return;
        }
        else if (_w.innerWidth > 832) {
            var marginMove = _w.innerWidth - 1204 < 0 ? Math.ceil((_w.innerWidth - 1204) / 2) : 0;
            if (marginMove == 0) {
                return;
            }
            slideBar.style[IS_RTL ? MARGIN_RIGHT : MARGIN_LEFT] = (INITIAL_MARGIN_LEFT + marginMove) + "px";
        }
        else {
            // screen width <= 832px
            var marginMove = _w.innerWidth - 832 < 0 ? Math.ceil((_w.innerWidth - 832) / 2) : 0;
            if (marginMove == 0) {
                return;
            }
            slideBar.style[IS_RTL ? MARGIN_RIGHT : MARGIN_LEFT] = (-236 + marginMove) + "px";
        }
    }
    function init() {
        var slideBar = sj_b.querySelector(SLIDE_BAR_SELECTOR);
        if (!slideBar) {
            return;
        }
        showChevronAlways();
        setMargin(slideBar);
        handleResize(slideBar);
        sb_st(function () {
            sj_evt.fire("zi_bold_init_done");
        }, 1000);
    }
    sj_evt.bind("zi_bold_init", function () {
        init();
    });
})(WelcomeScreenBold || (WelcomeScreenBold = {}));
