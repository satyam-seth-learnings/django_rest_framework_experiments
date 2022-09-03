export interface paths {
    "/studentapi/": {
        get: operations["listStudents"];
        post: operations["createStudent"];
    };
    "/studentapi/{id}/": {
        get: operations["retrieveStudent"];
        put: operations["updateStudent"];
        delete: operations["destroyStudent"];
        patch: operations["partialUpdateStudent"];
    };
}
export interface components {
    schemas: {
        Student: {
            id?: number;
            name: string;
            roll: number;
            city: string;
        };
    };
}
export interface operations {
    listStudents: {
        parameters: {};
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Student"][];
                };
            };
        };
    };
    createStudent: {
        parameters: {};
        responses: {
            201: {
                content: {
                    "application/json": components["schemas"]["Student"];
                };
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Student"];
                "application/x-www-form-urlencoded": components["schemas"]["Student"];
                "multipart/form-data": components["schemas"]["Student"];
            };
        };
    };
    retrieveStudent: {
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Student"];
                };
            };
        };
    };
    updateStudent: {
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Student"];
                };
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Student"];
                "application/x-www-form-urlencoded": components["schemas"]["Student"];
                "multipart/form-data": components["schemas"]["Student"];
            };
        };
    };
    destroyStudent: {
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            204: never;
        };
    };
    partialUpdateStudent: {
        parameters: {
            path: {
                id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Student"];
                };
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Student"];
                "application/x-www-form-urlencoded": components["schemas"]["Student"];
                "multipart/form-data": components["schemas"]["Student"];
            };
        };
    };
}
export interface external {
}
