"use strict";
function moveNations(nation) {
    let speed;
    switch (nation.type) {
        case 'germany':
            speed = nation.flyingSpeed;
            break;
        case 'france':
            speed = nation.runningSpeed;
    }
    console.log('Moving to nations: ' + speed);
}
moveNations({ type: 'germany', flyingSpeed: 10 });
//# sourceMappingURL=app.js.map