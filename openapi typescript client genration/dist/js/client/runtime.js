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
//# sourceMappingURL=runtime.js.map