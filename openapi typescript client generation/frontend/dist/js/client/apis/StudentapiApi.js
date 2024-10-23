"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.StudentapiApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
class StudentapiApi extends runtime.BaseAPI {
    createStudentRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/studentapi/`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.StudentToJSON)(requestParameters.student),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.StudentFromJSON)(jsonValue));
        });
    }
    createStudent(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createStudentRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    destroyStudentRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling destroyStudent.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/studentapi/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    destroyStudent(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.destroyStudentRaw(requestParameters, initOverrides);
        });
    }
    listStudentsRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/studentapi/`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.StudentFromJSON));
        });
    }
    listStudents(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.listStudentsRaw(initOverrides);
            return yield response.value();
        });
    }
    partialUpdateStudentRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling partialUpdateStudent.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/studentapi/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.StudentToJSON)(requestParameters.student),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.StudentFromJSON)(jsonValue));
        });
    }
    partialUpdateStudent(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.partialUpdateStudentRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    retrieveStudentRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling retrieveStudent.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/studentapi/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.StudentFromJSON)(jsonValue));
        });
    }
    retrieveStudent(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.retrieveStudentRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    updateStudentRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling updateStudent.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/studentapi/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.StudentToJSON)(requestParameters.student),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.StudentFromJSON)(jsonValue));
        });
    }
    updateStudent(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateStudentRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.StudentapiApi = StudentapiApi;
//# sourceMappingURL=StudentapiApi.js.map