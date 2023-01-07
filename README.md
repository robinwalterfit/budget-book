<p align="center">
    <a href="https://github.com/robinwalterfit/budget-book">
        <img src="https://github.com/robinwalterfit/budget-book/blob/main/src/assets/images/icon.png" height="128">
        <h1 align="center">Budget Book</h1>
    </a>
</p>

<p align="center">
    <a aria-label="Commitizen friendly" href="https://commitizen.github.io/cz-cli/">
        <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge">
    </a>
</p>

Budget Book aims to be a small web application to help you to manage your
finances, based on [Strapi CMS](https://strapi.io/) (backend) and
[Next.js](https://nextjs.org/) (front-end).

## Installation / First steps

To get a local copy running all you need are Docker and Docker Compose:

```bash
docker compose up -d
```

To make sure the Docker images can be built successfully, you will need the
following environment variables in your `shell`:

```bash
export BUILD_ARCH=$(uname -m)
export BUILD_OS=$(uname)
export BUILD_TIMESTAMP=$(date +%s)
# Prevent "fatal: no git..."
if git -C . rev-parse 2> /dev/null; then
    export COMMIT_HASH=$(git log -n 1 --format=%H)
else
    export COMMIT_HASH="n/a"
fi
export USER_GID=$(id -g)
export USER_UID=$(id -u)
export USERNAME=$(id -un)
```

To prevent exporting these environment variables over and over again, being
able to use "Docker Compose Variable Substitution" and "VSCode Devcontainer
Variable Substitution", it is advisable to store those variables either in
`~/.bash_profile` or `~/.zshenv` (based on your login-shell).

Docker compose uses the `docker-compose.yml` file to build the Docker images
and starts the container in detached mode.

## Development

To extend Budget Book Docker is used, too. Using Docker and Docker
Compose simplifies the installation and setup of needed servers/tools (e.g.
PostgreSQL) and the development environment. Visual Studio Code is
the recommend code editor along with the official `Devcontainers` and `Docker`
extensions.

```bash
git clone git@github.com:robinwalterfit/budget-book.git
# or: gh repo clone robinwalterfit/budget-book
cd budget-book/
code .
```

At first the repository will be cloned in your current directory. Alternatively
this can be done with the GitHub CLI. Then the directory is changed to the
cloned repository and VSCode will be started.

### Build project

The website can be independently built from the server.

#### Front-End

You need `Node.js` and `pnpm` or `Docker` installed.

```bash
pnpm install
pnpm generate
```

Or with Docker:

```bash
docker buildx build --build-arg BUILD_ARCH=$(uname -m) --build-arg BUILD_OS=$(uname) --build-arg BUILD_TIMESTAMP=$(date +%s) --build-arg COMMIT_HASH=$(git log -n 1 --format=%H) --build-arg NODE_ENV=production --build-arg USER_GID=$(id -g) --build-arg USER_UID=$(id -u) --build-arg USERNAME=$(id -un) --build-arg VERSION=$(cat package.json | grep -o '"version": "[^"]*' | grep -o '[^"]*$') -f docker/budget-book-web.Dockerfile -t robinwalterfit/budget-book-web:latest --target export -o - . > budget-book-web_latest.tar
tar -xzf budget-book-web_latest.tar -C ./public
rm budget-book-web_latest.tar
```

No matter which way you choose, the built will live in the `/public` directory.

If you chose to build the website with Docker, the export stage of the
`Dockerfile` will be used. The website will be built as part of the Docker image
and then exported to an empty filesystem, which will be saved in a `tar` archive.
This archive will then be unpacked in the `/public` folder.

#### Backend

Use the following command to build the backend image:

```bash
docker buildx build --build-arg BUILD_ARCH=$(uname -m) --build-arg BUILD_OS=$(uname) --build-arg BUILD_TIMESTAMP=$(date +%s) --build-arg COMMIT_HASH=$(git log -n 1 --format=%H) --build-arg NODE_ENV=production --build-arg USER_GID=$(id -g) --build-arg USER_UID=$(id -u) --build-arg USERNAME=$(id -un) --build-arg VERSION=$(cat package.json | grep -o '"version": "[^"]*' | grep -o '[^"]*$') -f docker/budget-book.Dockerfile -t robinwalterfit/budget-book:latest --target production .
```

## Features

-   Serve your own Budget Book instance via Docker (Compose)
-   Manage your finances via the web

## Configuration

It's possible to customize the website via the `.env*` (dotenv) files. These can
be used to configure the project for different environments (`development`,
`test`, `production`, etc.).

## Links

-   Project Repository: [https://github.com/robinwalterfit/budget-book](https://github.com/robinwalterfit/budget-book)
-   Issues / Features: [https://github.com/robinwalterfit/budget-book/issues](https://github.com/robinwalterfit/budget-book/issues)
-   See also:
    -   Commitizen: [https://commitizen.github.io/cz-cli/](https://commitizen.github.io/cz-cli/)
    -   Commitlint: [https://commitlint.js.org/#/](https://commitlint.js.org/#/)
    -   Conventional Commits: [https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/)
    -   Cypress: [https://www.cypress.io/](https://www.cypress.io/)
    -   Docker: [https://www.docker.com/](https://www.docker.com/)
    -   Docker Compose: [https://docs.docker.com/compose/](https://docs.docker.com/compose/)
    -   EditorConfig: [https://editorconfig.org/](https://editorconfig.org/)
    -   ESLint: [https://eslint.org/](https://eslint.org/)
    -   GitHub: [https://github.com](https://github.com)
    -   Husky: [https://typicode.github.io/husky/#/](https://typicode.github.io/husky/#/)
    -   Lint staged: [https://github.com/okonet/lint-staged](https://github.com/okonet/lint-staged)
    -   Lodash: [https://lodash.com/](https://lodash.com/)
    -   Next.js: [https://nextjs.org/](https://nextjs.org/)
    -   PNPM: [https://pnpm.io/](https://pnpm.io/)
    -   PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
    -   Prettier: [https://prettier.io/](https://prettier.io/)
    -   React.js: [https://reactjs.org/](https://reactjs.org/)
    -   Release Please: [https://github.com/googleapis/release-please](https://github.com/googleapis/release-please)
    -   Strapi CMS: [https://strapi.io/](https://strapi.io/)
    -   tr&aelig;fik proxy: [https://traefik.io/traefik/](https://traefik.io/traefik/)
    -   Visual Studio Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)

## License

```
   Copyright 2023 Robin Walter <hello@robinwalter.me>

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

See [LICENSE](https://github.com/robinwalterfit/budget-book/blob/main/LICENSE)
for more information.
