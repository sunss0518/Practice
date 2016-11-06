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
    var app = document.getElementById("wrap-tab-app");
    var appDown = document.getElementById("wrap-tab-app-down");
    var more = document.getElementById("more");
    EventUtil.addHandler(app, "mousewheel", function(event) {
        event = EventUtil.getEvent(event);
        var delta = event.wheelDelta;
        if (delta < 0) {
            appDown.style.display = "block";
            more.style.display = "none";
        }
    });
};
