# StudentapiApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createStudent**](StudentapiApi.md#createStudent) | **POST** /studentapi/ |  |
| [**destroyStudent**](StudentapiApi.md#destroyStudent) | **DELETE** /studentapi/{id}/ |  |
| [**listStudents**](StudentapiApi.md#listStudents) | **GET** /studentapi/ |  |
| [**partialUpdateStudent**](StudentapiApi.md#partialUpdateStudent) | **PATCH** /studentapi/{id}/ |  |
| [**retrieveStudent**](StudentapiApi.md#retrieveStudent) | **GET** /studentapi/{id}/ |  |
| [**updateStudent**](StudentapiApi.md#updateStudent) | **PUT** /studentapi/{id}/ |  |


<a id="createStudent"></a>
# **createStudent**
> Student createStudent(student)





### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.StudentapiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    StudentapiApi apiInstance = new StudentapiApi(defaultClient);
    Student student = new Student(); // Student | 
    try {
      Student result = apiInstance.createStudent(student);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StudentapiApi#createStudent");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **student** | [**Student**](Student.md)|  | [optional] |

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
| **201** |  |  -  |

<a id="destroyStudent"></a>
# **destroyStudent**
> destroyStudent(id)





### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.StudentapiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    StudentapiApi apiInstance = new StudentapiApi(defaultClient);
    String id = "id_example"; // String | A unique integer value identifying this student.
    try {
      apiInstance.destroyStudent(id);
    } catch (ApiException e) {
      System.err.println("Exception when calling StudentapiApi#destroyStudent");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| A unique integer value identifying this student. | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** |  |  -  |

<a id="listStudents"></a>
# **listStudents**
> List&lt;Student&gt; listStudents()





### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.StudentapiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    StudentapiApi apiInstance = new StudentapiApi(defaultClient);
    try {
      List<Student> result = apiInstance.listStudents();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StudentapiApi#listStudents");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Student&gt;**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="partialUpdateStudent"></a>
# **partialUpdateStudent**
> Student partialUpdateStudent(id, student)





### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.StudentapiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    StudentapiApi apiInstance = new StudentapiApi(defaultClient);
    String id = "id_example"; // String | A unique integer value identifying this student.
    Student student = new Student(); // Student | 
    try {
      Student result = apiInstance.partialUpdateStudent(id, student);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StudentapiApi#partialUpdateStudent");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| A unique integer value identifying this student. | |
| **student** | [**Student**](Student.md)|  | [optional] |

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
| **200** |  |  -  |

<a id="retrieveStudent"></a>
# **retrieveStudent**
> Student retrieveStudent(id)





### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.StudentapiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    StudentapiApi apiInstance = new StudentapiApi(defaultClient);
    String id = "id_example"; // String | A unique integer value identifying this student.
    try {
      Student result = apiInstance.retrieveStudent(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StudentapiApi#retrieveStudent");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| A unique integer value identifying this student. | |

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
| **200** |  |  -  |

<a id="updateStudent"></a>
# **updateStudent**
> Student updateStudent(id, student)





### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.StudentapiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    StudentapiApi apiInstance = new StudentapiApi(defaultClient);
    String id = "id_example"; // String | A unique integer value identifying this student.
    Student student = new Student(); // Student | 
    try {
      Student result = apiInstance.updateStudent(id, student);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StudentapiApi#updateStudent");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| A unique integer value identifying this student. | |
| **student** | [**Student**](Student.md)|  | [optional] |

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
| **200** |  |  -  |

