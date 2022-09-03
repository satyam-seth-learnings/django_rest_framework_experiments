"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../client");
const configuration = new client_1.Configuration({
    basePath: 'http://127.0.0.1:8000',
});
const studentApi = new client_1.StudentapiApi(configuration);
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield studentApi.listStudents();
    console.log(students);
    document.getElementById("students").innerText = JSON.stringify(students);
});
//# sourceMappingURL=demo.js.map