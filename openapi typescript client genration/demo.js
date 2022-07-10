(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../models":5,"../runtime":6}],2:[function(require,module,exports){
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./StudentapiApi"), exports);

},{"./StudentapiApi":1}],3:[function(require,module,exports){
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./runtime"), exports);
__exportStar(require("./apis"), exports);
__exportStar(require("./models"), exports);

},{"./apis":2,"./models":5,"./runtime":6}],4:[function(require,module,exports){
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

},{"../runtime":6}],5:[function(require,module,exports){
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Student"), exports);

},{"./Student":4}],6:[function(require,module,exports){
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
exports.TextApiResponse = exports.BlobApiResponse = exports.VoidApiResponse = exports.JSONApiResponse = exports.canConsumeForm = exports.mapValues = exports.querystring = exports.exists = exports.COLLECTION_FORMATS = exports.RequiredError = exports.ResponseError = exports.BaseAPI = exports.DefaultConfig = exports.Configuration = exports.BASE_PATH = void 0;
exports.BASE_PATH = "http://localhost".replace(/\/+$/, "");
class Configuration {
    constructor(configuration = {}) {
        this.configuration = configuration;
    }
    set config(configuration) {
        this.configuration = configuration;
    }
    get basePath() {
        return this.configuration.basePath != null ? this.configuration.basePath : exports.BASE_PATH;
    }
    get fetchApi() {
        return this.configuration.fetchApi;
    }
    get middleware() {
        return this.configuration.middleware || [];
    }
    get queryParamsStringify() {
        return this.configuration.queryParamsStringify || querystring;
    }
    get username() {
        return this.configuration.username;
    }
    get password() {
        return this.configuration.password;
    }
    get apiKey() {
        const apiKey = this.configuration.apiKey;
        if (apiKey) {
            return typeof apiKey === 'function' ? apiKey : () => apiKey;
        }
        return undefined;
    }
    get accessToken() {
        const accessToken = this.configuration.accessToken;
        if (accessToken) {
            return typeof accessToken === 'function' ? accessToken : () => __awaiter(this, void 0, void 0, function* () { return accessToken; });
        }
        return undefined;
    }
    get headers() {
        return this.configuration.headers;
    }
    get credentials() {
        return this.configuration.credentials;
    }
}
exports.Configuration = Configuration;
exports.DefaultConfig = new Configuration();
class BaseAPI {
    constructor(configuration = exports.DefaultConfig) {
        this.configuration = configuration;
        this.fetchApi = (url, init) => __awaiter(this, void 0, void 0, function* () {
            let fetchParams = { url, init };
            for (const middleware of this.middleware) {
                if (middleware.pre) {
                    fetchParams = (yield middleware.pre(Object.assign({ fetch: this.fetchApi }, fetchParams))) || fetchParams;
                }
            }
            let response = yield (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
            for (const middleware of this.middleware) {
                if (middleware.post) {
                    response = (yield middleware.post({
                        fetch: this.fetchApi,
                        url: fetchParams.url,
                        init: fetchParams.init,
                        response: response.clone(),
                    })) || response;
                }
            }
            return response;
        });
        this.middleware = configuration.middleware;
    }
    withMiddleware(...middlewares) {
        const next = this.clone();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }
    withPreMiddleware(...preMiddlewares) {
        const middlewares = preMiddlewares.map((pre) => ({ pre }));
        return this.withMiddleware(...middlewares);
    }
    withPostMiddleware(...postMiddlewares) {
        const middlewares = postMiddlewares.map((post) => ({ post }));
        return this.withMiddleware(...middlewares);
    }
    request(context, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url, init } = yield this.createFetchParams(context, initOverrides);
            const response = yield this.fetchApi(url, init);
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            throw new ResponseError(response, 'Response returned an error code');
        });
    }
    createFetchParams(context, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.configuration.basePath + context.path;
            if (context.query !== undefined && Object.keys(context.query).length !== 0) {
                url += '?' + this.configuration.queryParamsStringify(context.query);
            }
            const headers = Object.assign({}, this.configuration.headers, context.headers);
            Object.keys(headers).forEach(key => headers[key] === undefined ? delete headers[key] : {});
            const initOverrideFn = typeof initOverrides === "function"
                ? initOverrides
                : () => __awaiter(this, void 0, void 0, function* () { return initOverrides; });
            const initParams = {
                method: context.method,
                headers,
                body: context.body,
                credentials: this.configuration.credentials,
            };
            const overridedInit = Object.assign(Object.assign({}, initParams), (yield initOverrideFn({
                init: initParams,
                context,
            })));
            const init = Object.assign(Object.assign({}, overridedInit), { body: isFormData(overridedInit.body) ||
                    overridedInit.body instanceof URLSearchParams ||
                    isBlob(overridedInit.body)
                    ? overridedInit.body
                    : JSON.stringify(overridedInit.body) });
            return { url, init };
        });
    }
    clone() {
        const constructor = this.constructor;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
}
exports.BaseAPI = BaseAPI;
;
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
function isFormData(value) {
    return typeof FormData !== "undefined" && value instanceof FormData;
}
class ResponseError extends Error {
    constructor(response, msg) {
        super(msg);
        this.response = response;
        this.name = "ResponseError";
    }
}
exports.ResponseError = ResponseError;
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
exports.RequiredError = RequiredError;
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
function exists(json, key) {
    const value = json[key];
    return value !== null && value !== undefined;
}
exports.exists = exists;
function querystring(params, prefix = '') {
    return Object.keys(params)
        .map(key => querystringSingleKey(key, params[key], prefix))
        .filter(part => part.length > 0)
        .join('&');
}
exports.querystring = querystring;
function querystringSingleKey(key, value, keyPrefix = '') {
    const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
    if (value instanceof Array) {
        const multiValue = value.map(singleValue => encodeURIComponent(String(singleValue)))
            .join(`&${encodeURIComponent(fullKey)}=`);
        return `${encodeURIComponent(fullKey)}=${multiValue}`;
    }
    if (value instanceof Set) {
        const valueAsArray = Array.from(value);
        return querystringSingleKey(key, valueAsArray, keyPrefix);
    }
    if (value instanceof Date) {
        return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
    }
    if (value instanceof Object) {
        return querystring(value, fullKey);
    }
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}
function mapValues(data, fn) {
    return Object.keys(data).reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: fn(data[key]) })), {});
}
exports.mapValues = mapValues;
function canConsumeForm(consumes) {
    for (const consume of consumes) {
        if ('multipart/form-data' === consume.contentType) {
            return true;
        }
    }
    return false;
}
exports.canConsumeForm = canConsumeForm;
class JSONApiResponse {
    constructor(raw, transformer = (jsonValue) => jsonValue) {
        this.raw = raw;
        this.transformer = transformer;
    }
    value() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.transformer(yield this.raw.json());
        });
    }
}
exports.JSONApiResponse = JSONApiResponse;
class VoidApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    value() {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
}
exports.VoidApiResponse = VoidApiResponse;
class BlobApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    value() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.raw.blob();
        });
    }
    ;
}
exports.BlobApiResponse = BlobApiResponse;
class TextApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    value() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.raw.text();
        });
    }
    ;
}
exports.TextApiResponse = TextApiResponse;

},{}],7:[function(require,module,exports){
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

},{"../client":3}]},{},[7]);
