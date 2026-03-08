[DRF Caching Doc](https://www.django-rest-framework.org/api-guide/caching/)

[Docker Redis](https://hub.docker.com/_/redis)

- Start docker redis

  ```sh
  docker run --name django-redis -d -p 6379:6379 --rm redis
  ```

- Access docker redis container terminal

  ```sh
  docker exec -it django-redis bash
  ```

- Check cache keys

  ```
  redis-cli -n 1 KEYS "*product_list*"
  ```

[Redis Py GitHub Link](https://github.com/redis/redis-py)

[Django Redis GitHub Link](https://github.com/jazzband/django-redis)

[YouTube Video Link](https://youtu.be/5W2Yff00H8s?si=w7FqEkhakFeKM-ap)
