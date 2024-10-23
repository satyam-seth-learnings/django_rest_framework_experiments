[Reference Link](https://www.django-rest-framework.org/api-guide/schemas/)

#### Steps

- Create virtual env

    ```sh
    python3 -m venv .venv
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
    ```bash
    python3 manage.py generateschema --file '../../frontend/openapi-schema.yml'
    ```

- Run Backend Server
    ```bash
    python3 manage.py runserver
    ```
