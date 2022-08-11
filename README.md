# express-ts-boilerplate
TypeScript-Express RESTful API Boilerplate.
<hr>

### 1. Installation
```console
git clone https://github.com/hifdzimaulana/express-ts-boilerplate.git
cd ./express-ts-boilerplate
npm install -D
```
> `-D` will install required locals-only development & testing dependencies in `"devDependencies"`.

### 2. Running
If you are about to set preferred port, you can do it with renaming `.env.example` file to `.env` and change `PORT` value.

- #### Development
  ```console
  npm run start
  ```

- #### Build
    Compile TypeScript project into JavaScript in `./dist` directory.
    ```console
    npm run build
    ```
    > If you are running on Windows, I suggest you to execute build command in Git Bash.
