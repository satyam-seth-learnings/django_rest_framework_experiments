# StudentapiAPI

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStudent**](StudentapiAPI.md#createstudent) | **POST** /studentapi/ | 
[**destroyStudent**](StudentapiAPI.md#destroystudent) | **DELETE** /studentapi/{id}/ | 
[**listStudents**](StudentapiAPI.md#liststudents) | **GET** /studentapi/ | 
[**partialUpdateStudent**](StudentapiAPI.md#partialupdatestudent) | **PATCH** /studentapi/{id}/ | 
[**retrieveStudent**](StudentapiAPI.md#retrievestudent) | **GET** /studentapi/{id}/ | 
[**updateStudent**](StudentapiAPI.md#updatestudent) | **PUT** /studentapi/{id}/ | 


# **createStudent**
```swift
    open class func createStudent(student: Student? = nil, completion: @escaping (_ data: Student?, _ error: Error?) -> Void)
```





### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let student = Student(id: 123, name: "name_example", roll: 123, city: "city_example") // Student |  (optional)

StudentapiAPI.createStudent(student: student) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **student** | [**Student**](Student.md) |  | [optional] 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **destroyStudent**
```swift
    open class func destroyStudent(id: String, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```





### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let id = "id_example" // String | A unique integer value identifying this student.

StudentapiAPI.destroyStudent(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** | A unique integer value identifying this student. | 

### Return type

Void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listStudents**
```swift
    open class func listStudents(completion: @escaping (_ data: [Student]?, _ error: Error?) -> Void)
```





### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient


StudentapiAPI.listStudents() { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Student]**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partialUpdateStudent**
```swift
    open class func partialUpdateStudent(id: String, student: Student? = nil, completion: @escaping (_ data: Student?, _ error: Error?) -> Void)
```





### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let id = "id_example" // String | A unique integer value identifying this student.
let student = Student(id: 123, name: "name_example", roll: 123, city: "city_example") // Student |  (optional)

StudentapiAPI.partialUpdateStudent(id: id, student: student) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** | A unique integer value identifying this student. | 
 **student** | [**Student**](Student.md) |  | [optional] 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveStudent**
```swift
    open class func retrieveStudent(id: String, completion: @escaping (_ data: Student?, _ error: Error?) -> Void)
```





### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let id = "id_example" // String | A unique integer value identifying this student.

StudentapiAPI.retrieveStudent(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** | A unique integer value identifying this student. | 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateStudent**
```swift
    open class func updateStudent(id: String, student: Student? = nil, completion: @escaping (_ data: Student?, _ error: Error?) -> Void)
```





### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let id = "id_example" // String | A unique integer value identifying this student.
let student = Student(id: 123, name: "name_example", roll: 123, city: "city_example") // Student |  (optional)

StudentapiAPI.updateStudent(id: id, student: student) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** | A unique integer value identifying this student. | 
 **student** | [**Student**](Student.md) |  | [optional] 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

