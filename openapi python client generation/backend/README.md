[Reference Link](https://www.django-rest-framework.org/api-guide/schemas/)

#### Steps

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
    python manage.py generateschema --file 'openapi-schema.yml'
    ```

- Run Backend Server
    
    ```sh
    python manage.py runserver
    ```

= Generate OpenAPI Client 

    ```sh
    openapi-python-client generate --path openapi-schema.yml --meta none --fail-on-warning --output-path ../frontend/client
    ```