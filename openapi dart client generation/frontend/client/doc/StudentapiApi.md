# openapi.api.StudentapiApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStudent**](StudentapiApi.md#createstudent) | **POST** /studentapi/ | 
[**destroyStudent**](StudentapiApi.md#destroystudent) | **DELETE** /studentapi/{id}/ | 
[**listStudents**](StudentapiApi.md#liststudents) | **GET** /studentapi/ | 
[**partialUpdateStudent**](StudentapiApi.md#partialupdatestudent) | **PATCH** /studentapi/{id}/ | 
[**retrieveStudent**](StudentapiApi.md#retrievestudent) | **GET** /studentapi/{id}/ | 
[**updateStudent**](StudentapiApi.md#updatestudent) | **PUT** /studentapi/{id}/ | 


# **createStudent**
> Student createStudent(student)





### Example
```dart
import 'package:openapi/api.dart';

final api_instance = StudentapiApi();
final student = Student(); // Student | 

try {
    final result = api_instance.createStudent(student);
    print(result);
} catch (e) {
    print('Exception when calling StudentapiApi->createStudent: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **student** | [**Student**](Student.md)|  | [optional] 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **destroyStudent**
> destroyStudent(id)





### Example
```dart
import 'package:openapi/api.dart';

final api_instance = StudentapiApi();
final id = id_example; // String | A unique integer value identifying this student.

try {
    api_instance.destroyStudent(id);
} catch (e) {
    print('Exception when calling StudentapiApi->destroyStudent: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this student. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listStudents**
> List<Student> listStudents()





### Example
```dart
import 'package:openapi/api.dart';

final api_instance = StudentapiApi();

try {
    final result = api_instance.listStudents();
    print(result);
} catch (e) {
    print('Exception when calling StudentapiApi->listStudents: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<Student>**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partialUpdateStudent**
> Student partialUpdateStudent(id, student)





### Example
```dart
import 'package:openapi/api.dart';

final api_instance = StudentapiApi();
final id = id_example; // String | A unique integer value identifying this student.
final student = Student(); // Student | 

try {
    final result = api_instance.partialUpdateStudent(id, student);
    print(result);
} catch (e) {
    print('Exception when calling StudentapiApi->partialUpdateStudent: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this student. | 
 **student** | [**Student**](Student.md)|  | [optional] 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveStudent**
> Student retrieveStudent(id)





### Example
```dart
import 'package:openapi/api.dart';

final api_instance = StudentapiApi();
final id = id_example; // String | A unique integer value identifying this student.

try {
    final result = api_instance.retrieveStudent(id);
    print(result);
} catch (e) {
    print('Exception when calling StudentapiApi->retrieveStudent: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this student. | 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateStudent**
> Student updateStudent(id, student)





### Example
```dart
import 'package:openapi/api.dart';

final api_instance = StudentapiApi();
final id = id_example; // String | A unique integer value identifying this student.
final student = Student(); // Student | 

try {
    final result = api_instance.updateStudent(id, student);
    print(result);
} catch (e) {
    print('Exception when calling StudentapiApi->updateStudent: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this student. | 
 **student** | [**Student**](Student.md)|  | [optional] 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

