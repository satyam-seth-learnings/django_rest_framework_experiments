[Reference Link](https://www.django-rest-framework.org/api-guide/schemas/)


- Create virtual env

  ```sh
  python -m venv .venv
  ```

- Activate virtual env

  ```sh
  source .venv/bin/activate
  ```

- Install required dependencies

  ```sh
  pip install -r requirements.txt
  ```

- Generate Open Api Schema File

  ```sh
  python manage.py generateschema --file openapi-schema.yml
  ```

[drf-spectacular Official Doc Link](https://drf-spectacular.readthedocs.io/en/latest/readme.html)
