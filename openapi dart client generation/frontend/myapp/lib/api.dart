import 'package:openapi/api.dart';

final apiClinet = ApiClient(basePath: 'http://127.0.0.1:8000');
final studentApi = StudentapiApi(apiClinet);

Future<List<Student>?> getStudents() async {
  try {
    final result = await studentApi.listStudents();
    print(result);
    return result;
  } catch (e) {
    print('Exception when calling StudentapiApi->listStudents: $e\n');
    return null;
  }
}
