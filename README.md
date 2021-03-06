# 参考
公式ページ  
https://auth0.com/docs/quickstart/webapp/nextjs  
https://auth0.com/docs/quickstart/webapp/nextjs/01-login  
公式ページのサンプル  
https://github.com/auth0-samples/auth0-nextjs-samples/tree/main/Sample-01  
ライブラリのサンプル（ただ、バージョンが古い時のサンプル？）  
https://github.com/auth0/nextjs-auth0/tree/master_OLD/examples/typescript-example  
https://github.com/auth0/nextjs-auth0/tree/main/examples/basic-example  

# next.js インストール

yarn create next-app . --typescript

# tailwind css インストール

yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

npx tailwindcss init -p

# tailwind.config.js 修正

```
purge: ["./src/**/*.{js,ts,jsx,tsx}"],
```

# globals.css 修正

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# 必要 module のインストール

```
yarn add classcat
yarn add -D eslint-plugin-simple-import-sort
yarn add -D prettier
yarn add -D eslint-config-prettier
yarn add -D @typescript-eslint/eslint-plugin
yarn add -D @typescript-eslint/parser
yarn add -D eslint-plugin-tailwindcss
yarn add -D @jarrodldavis/eslint-plugin-tailwindcss@latest
yarn add -D prettier-plugin-tailwind
yarn add @auth0/nextjs-auth0
yarn add -D isomorphic-unfetch
```


# index.tsx 確認用
```
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen text-red-700 font-mono">
      Hello Nextjs
    </div>
  );
};
export default Home;

```

## Next.js Auth0 のサンプルから

```
yarn add reactstrap
yarn add highlight.js
yarn add dotenv
yarn add express express-jwt morgan cors jwks-rsa helmet
yarn add -D @fortawesome/fontawesome-svg-core
yarn add -D @fortawesome/free-solid-svg-icons
yarn add -D @fortawesome/react-fontawesome
```

# next.config.js

```
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
      "lh6.googleusercontent.com",
    ],
```