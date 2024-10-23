# openapi_client.StudentapiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_student**](StudentapiApi.md#create_student) | **POST** /studentapi/ | 
[**destroy_student**](StudentapiApi.md#destroy_student) | **DELETE** /studentapi/{id}/ | 
[**list_students**](StudentapiApi.md#list_students) | **GET** /studentapi/ | 
[**partial_update_student**](StudentapiApi.md#partial_update_student) | **PATCH** /studentapi/{id}/ | 
[**retrieve_student**](StudentapiApi.md#retrieve_student) | **GET** /studentapi/{id}/ | 
[**update_student**](StudentapiApi.md#update_student) | **PUT** /studentapi/{id}/ | 


# **create_student**
> Student create_student(student=student)





### Example


```python
import openapi_client
from openapi_client.models.student import Student
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StudentapiApi(api_client)
    student = openapi_client.Student() # Student |  (optional)

    try:
        api_response = api_instance.create_student(student=student)
        print("The response of StudentapiApi->create_student:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StudentapiApi->create_student: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **destroy_student**
> destroy_student(id)





### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StudentapiApi(api_client)
    id = 'id_example' # str | A unique integer value identifying this student.

    try:
        api_instance.destroy_student(id)
    except Exception as e:
        print("Exception when calling StudentapiApi->destroy_student: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A unique integer value identifying this student. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_students**
> List[Student] list_students()





### Example


```python
import openapi_client
from openapi_client.models.student import Student
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StudentapiApi(api_client)

    try:
        api_response = api_instance.list_students()
        print("The response of StudentapiApi->list_students:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StudentapiApi->list_students: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Student]**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partial_update_student**
> Student partial_update_student(id, student=student)





### Example


```python
import openapi_client
from openapi_client.models.student import Student
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StudentapiApi(api_client)
    id = 'id_example' # str | A unique integer value identifying this student.
    student = openapi_client.Student() # Student |  (optional)

    try:
        api_response = api_instance.partial_update_student(id, student=student)
        print("The response of StudentapiApi->partial_update_student:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StudentapiApi->partial_update_student: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A unique integer value identifying this student. | 
 **student** | [**Student**](Student.md)|  | [optional] 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_student**
> Student retrieve_student(id)





### Example


```python
import openapi_client
from openapi_client.models.student import Student
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StudentapiApi(api_client)
    id = 'id_example' # str | A unique integer value identifying this student.

    try:
        api_response = api_instance.retrieve_student(id)
        print("The response of StudentapiApi->retrieve_student:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StudentapiApi->retrieve_student: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A unique integer value identifying this student. | 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_student**
> Student update_student(id, student=student)





### Example


```python
import openapi_client
from openapi_client.models.student import Student
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StudentapiApi(api_client)
    id = 'id_example' # str | A unique integer value identifying this student.
    student = openapi_client.Student() # Student |  (optional)

    try:
        api_response = api_instance.update_student(id, student=student)
        print("The response of StudentapiApi->update_student:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StudentapiApi->update_student: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A unique integer value identifying this student. | 
 **student** | [**Student**](Student.md)|  | [optional] 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

