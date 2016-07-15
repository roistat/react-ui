'use strict';

const addEventListener = (target, eventType, callback) => {
    if (target.addEventListener) {
        target.addEventListener(eventType, callback, true);

        return {
            remove: function() {
                target.removeEventListener(eventType, callback, true);
            }
        };

    } else if (target.attachEvent) {
        target.attachEvent('on' + eventType, callback);

        return {
            remove: function() {
                target.detachEvent('on' + eventType, callback);
            }
        };
    }
};

export default addEventListener;