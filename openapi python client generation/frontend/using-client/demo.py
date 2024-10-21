
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
    student = openapi_client.Student() # Student |  (optional)

    try:
        api_response = api_instance.create_student(student=student)
        print("The response of StudentapiApi->create_student:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling StudentapiApi->create_student: %s\n" % e)
