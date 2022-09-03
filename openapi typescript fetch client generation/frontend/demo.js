(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
const openapi_typescript_fetch_1 = require("openapi-typescript-fetch");
const fetcher = openapi_typescript_fetch_1.Fetcher.for();
fetcher.configure({
    baseUrl: 'http://127.0.0.1:8000',
});
function getStudents() {
    return __awaiter(this, void 0, void 0, function* () {
        const studentApi = fetcher.path('/studentapi/').method('get').create();
        try {
            const response = yield studentApi({});
            if (response.status === 200) {
                return response.data;
            }
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.default = getStudents;

},{"openapi-typescript-fetch":4}],2:[function(require,module,exports){
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const call_1 = __importDefault(require("./call"));
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield (0, call_1.default)();
    document.getElementById("students").innerText = JSON.stringify(students);
});

},{"./call":1}],3:[function(require,module,exports){
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
exports.Fetcher = void 0;
const types_1 = require("./types");
const sendBody = (method) => method === 'post' ||
    method === 'put' ||
    method === 'patch' ||
    method === 'delete';
function queryString(params) {
    const qs = [];
    const encode = (key, value) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value != null) {
            if (Array.isArray(value)) {
                value.forEach((value) => qs.push(encode(key, value)));
            }
            else {
                qs.push(encode(key, value));
            }
        }
    });
    if (qs.length > 0) {
        return `?${qs.join('&')}`;
    }
    return '';
}
function getPath(path, payload) {
    return path.replace(/\{([^}]+)\}/g, (_, key) => {
        const value = encodeURIComponent(payload[key]);
        delete payload[key];
        return value;
    });
}
function getQuery(method, payload, query) {
    let queryObj = {};
    if (sendBody(method)) {
        query.forEach((key) => {
            queryObj[key] = payload[key];
            delete payload[key];
        });
    }
    else {
        queryObj = Object.assign({}, payload);
    }
    return queryString(queryObj);
}
function getHeaders(body, init) {
    const headers = new Headers(init);
    if (body !== undefined && !headers.has('Content-Type')) {
        headers.append('Content-Type', 'application/json');
    }
    if (!headers.has('Accept')) {
        headers.append('Accept', 'application/json');
    }
    return headers;
}
function getBody(method, payload) {
    const body = sendBody(method) ? JSON.stringify(payload) : undefined;
    return method === 'delete' && body === '{}' ? undefined : body;
}
function mergeRequestInit(first, second) {
    const headers = new Headers(first === null || first === void 0 ? void 0 : first.headers);
    const other = new Headers(second === null || second === void 0 ? void 0 : second.headers);
    for (const key of other.keys()) {
        const value = other.get(key);
        if (value != null) {
            headers.set(key, value);
        }
    }
    return Object.assign(Object.assign(Object.assign({}, first), second), { headers });
}
function getFetchParams(request) {
    var _a;
    const payload = Object.assign(Array.isArray(request.payload) ? [] : {}, request.payload);
    const path = getPath(request.path, payload);
    const query = getQuery(request.method, payload, request.queryParams);
    const body = getBody(request.method, payload);
    const headers = getHeaders(body, (_a = request.init) === null || _a === void 0 ? void 0 : _a.headers);
    const url = request.baseUrl + path + query;
    const init = Object.assign(Object.assign({}, request.init), { method: request.method.toUpperCase(), headers,
        body });
    return { url, init };
}
function getResponseData(response) {
    return __awaiter(this, void 0, void 0, function* () {
        const contentType = response.headers.get('content-type');
        if (response.status === 204) {
            return undefined;
        }
        if (contentType && contentType.indexOf('application/json') !== -1) {
            return yield response.json();
        }
        const text = yield response.text();
        try {
            return JSON.parse(text);
        }
        catch (e) {
            return text;
        }
    });
}
function fetchJson(url, init) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, init);
        const data = yield getResponseData(response);
        const result = {
            headers: response.headers,
            url: response.url,
            ok: response.ok,
            status: response.status,
            statusText: response.statusText,
            data,
        };
        if (result.ok) {
            return result;
        }
        throw new types_1.ApiError(result);
    });
}
function wrapMiddlewares(middlewares, fetch) {
    const handler = (index, url, init) => __awaiter(this, void 0, void 0, function* () {
        if (middlewares == null || index === middlewares.length) {
            return fetch(url, init);
        }
        const current = middlewares[index];
        return yield current(url, init, (nextUrl, nextInit) => handler(index + 1, nextUrl, nextInit));
    });
    return (url, init) => handler(0, url, init);
}
function fetchUrl(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const { url, init } = getFetchParams(request);
        const response = yield request.fetch(url, init);
        return response;
    });
}
function createFetch(fetch) {
    const fun = (payload, init) => __awaiter(this, void 0, void 0, function* () {
        try {
            return yield fetch(payload, init);
        }
        catch (err) {
            if (err instanceof types_1.ApiError) {
                throw new fun.Error(err);
            }
            throw err;
        }
    });
    fun.Error = class extends types_1.ApiError {
        constructor(error) {
            super(error);
            Object.setPrototypeOf(this, new.target.prototype);
        }
        getActualType() {
            return {
                status: this.status,
                data: this.data,
            };
        }
    };
    return fun;
}
function fetcher() {
    let baseUrl = '';
    let defaultInit = {};
    const middlewares = [];
    const fetch = wrapMiddlewares(middlewares, fetchJson);
    return {
        configure: (config) => {
            baseUrl = config.baseUrl || '';
            defaultInit = config.init || {};
            middlewares.splice(0);
            middlewares.push(...(config.use || []));
        },
        use: (mw) => middlewares.push(mw),
        path: (path) => ({
            method: (method) => ({
                create: ((queryParams) => createFetch((payload, init) => fetchUrl({
                    baseUrl: baseUrl || '',
                    path: path,
                    method: method,
                    queryParams: Object.keys(queryParams || {}),
                    payload,
                    init: mergeRequestInit(defaultInit, init),
                    fetch,
                }))),
            }),
        }),
    };
}
exports.Fetcher = {
    for: () => fetcher(),
};

},{"./types":5}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayRequestBody = exports.ApiError = exports.Fetcher = void 0;
const fetcher_1 = require("./fetcher");
Object.defineProperty(exports, "Fetcher", { enumerable: true, get: function () { return fetcher_1.Fetcher; } });
const utils_1 = require("./utils");
Object.defineProperty(exports, "arrayRequestBody", { enumerable: true, get: function () { return utils_1.arrayRequestBody; } });
const types_1 = require("./types");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return types_1.ApiError; } });

},{"./fetcher":3,"./types":5,"./utils":6}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
const never = Symbol();
class ApiError extends Error {
    constructor(response) {
        super(response.statusText);
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "statusText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.setPrototypeOf(this, new.target.prototype);
        this.headers = response.headers;
        this.url = response.url;
        this.status = response.status;
        this.statusText = response.statusText;
        this.data = response.data;
    }
}
exports.ApiError = ApiError;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayRequestBody = void 0;
function arrayRequestBody(array, params) {
    return Object.assign([...array], params);
}
exports.arrayRequestBody = arrayRequestBody;

},{}]},{},[2]);
