"use strict";
const p2 = {
    name: "Adam Girvil",
    privileges: ["create-server"],
    startDate: new Date()
};
function AddComponent(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
//# sourceMappingURL=app.js.map