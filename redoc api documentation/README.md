[Reference Link](https://www.django-rest-framework.org/topics/documenting-your-api/#a-minimal-example-with-redoc/)

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

- Run Backend Server
    
    ```sh
    python manage.py runserver
    ```

- Open [redoc page](http://127.0.0.1:8000/redoc/)