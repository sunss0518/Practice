window.onload = function() {
    var EventUtil = {
        addHandler: function (element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },
        removeHandler: function (element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent) {
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        },        
        getEvent: function (event) {
            return event ? event : window.event;
        },
        getTarget: function (event) {
            return event.target || event.srcElement;
        },
        preventDefault: function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        stopPropagation: function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubbles = true;
            }
        },
        getRelatedTarget: function (event) {
            if (event.relatedTarger) {
                return event.relatedTarget;
            } else if (event.toElement) {
                return event.toElement;
            } else if (event.fromElement) {
                return event.fromElement;
            } else { return null; }        
        }        
    }
    tabApp();
    tabAppSlider();
    function tabAppSlider() {
        var wrapApp = document.getElementById("wrap-tab-app");
        var appDown = document.getElementById("wrap-tab-app-down");
        var more = document.getElementById("more");
        EventUtil.addHandler(wrapApp, "mousewheel", function(event) {
            event = EventUtil.getEvent(event);
            var delta = event.wheelDelta;
            if (delta < 0) {
                appDown.style.display = "block";
                more.style.display = "none";
            } else {                                                   
                var y = wrapApp.scrollTop;
                if (y == 0) {
                    more.style.display = "block";
                    appDown.style.display = "none";
                }
            }
        });
    }
    function tabApp() {                                              
        var app = document.getElementById("app");
        var wrapApp = document.getElementById("wrap-tab-app");
        var appDown = document.getElementById("app-down");
        var appUp = document.getElementById("app-up");
        var triangle = document.getElementById("triangle");
        EventUtil.addHandler(app, "click", function(event) {        
            var boolZ = wrapApp.style.zIndex;
            if (boolZ == "-1") {
                wrapApp.style.zIndex = "1";
                appUp.style.zIndex = "-1";
                appDown.style.zIndex = "1";
                triangle.style.zIndex = "2";
            } else {
                wrapApp.style.zIndex = "-1";
                appUp.style.zIndex = "1";
                appDown.style.zIndex = "-1";
                triangle.style.zIndex = "-1";
            }
        });
    }
};
