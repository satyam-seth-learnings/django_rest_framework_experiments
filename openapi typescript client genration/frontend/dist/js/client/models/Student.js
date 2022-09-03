"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentToJSON = exports.StudentFromJSONTyped = exports.StudentFromJSON = void 0;
const runtime_1 = require("../runtime");
function StudentFromJSON(json) {
    return StudentFromJSONTyped(json, false);
}
exports.StudentFromJSON = StudentFromJSON;
function StudentFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'roll': json['roll'],
        'city': json['city'],
    };
}
exports.StudentFromJSONTyped = StudentFromJSONTyped;
function StudentToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'roll': value.roll,
        'city': value.city,
    };
}
exports.StudentToJSON = StudentToJSON;
//# sourceMappingURL=Student.js.map