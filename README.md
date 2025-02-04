# dev-and-deliver-recruitment-task 

## Table of contents

- [Setup locally](#setup-locally)
- [Docker setup](#docker-setup)
- [Swagger documentation](#swagger-documentation)
- [Tests](#tests)
- [Dev and deliver feedback](#dev-and-delver-feedback)

## Setup locally

1. Clone repository:

```sh
git clone git@github.com:perfringis/dev-and-deliver-recruitment-task.git
```

2. Go to a project and install packages.

```sh
pnpm install
```

3. Configure .env file based on .env.dev template.

```sh
DATABASE_NAME=<YOUR_DB_NAME>
DATABASE_PORT=<YOUR_PORT>
DATABASE_USERNAME=<YOUR_DB_USER>
DATABASE_PASSWORD=<YOUR_DB_PASS>
DATABASE_HOST=<YOUR_DB_HOST>
```

> NOTE! You can omit `DATABASE_HOST` or setup as `127.0.0.1`.

4. Run project in `dev` mode. List of all commands you will find in the `package.json` file.

```sh
pnpm run start:dev
```

## Docker setup

1. Clone repository:

```sh
git clone git@github.com:perfringis/dev-and-deliver-recruitment-task.git
```

2. Run docker configuration:

```sh
docker compose -f docker-compose.yml up
```

## Swagger documentation

Documentation is available under `localhost:300/api`.

## Tests

Run tests by:

```sh
pnpm test
```

## dev and deliver feedback

> In docker-compose.yml, you can use environment variables, including those from a dotenv file. This allows you to avoid storing, for example, database credentials in two places (separately in docker-compose.yml and .env) by using environment variables directly in docker-compose.yml. https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/

Done

> Integration tests fine.

Add my insights later.

> Swagger is fine.

Add my insights later.

> The application lacks security measures, such as CORS. It's worth considering these aspects when developing both web applications and APIs. https://docs.nestjs.com/security/cors https://docs.nestjs.com/security/helmet

Added CORS config and HELMET lib.

> "Lack of division of the application into modules. All dependencies are placed directly into the main module." https://docs.nestjs.com/modules

