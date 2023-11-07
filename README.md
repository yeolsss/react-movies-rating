# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
movie-rating
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 01
│  │  │  └─ 776980e7a9041214850f51895fd1f8b6180a11
│  │  ├─ 04
│  │  │  └─ d4759b79617c521a3fa60994f4f7f43a752e7c
│  │  ├─ 05
│  │  │  └─ 5c841e59b9d5c656793901c1a24d16456b83ce
│  │  ├─ 23
│  │  │  └─ 191692507e515b4e826506db3cca152f650496
│  │  ├─ 2a
│  │  │  └─ d971cb2116429295bf502751bc26e8dfbc307f
│  │  ├─ 3f
│  │  │  └─ cf02a49f2b3715f34f541e28341c21a725b80c
│  │  ├─ 41
│  │  │  └─ 6d973834e6564c9e6b871b958b50707992585c
│  │  ├─ 4a
│  │  │  └─ 79fcd19fade3a9290dd94fbd64733867bee5a7
│  │  ├─ 53
│  │  │  └─ 39f1b62b2525c46116d5cfa09f49584cbaec10
│  │  ├─ 6b
│  │  │  └─ a69582652797a87de0a2ab22849f858088b81e
│  │  ├─ 76
│  │  │  └─ f88a104cb97b7b1e90d33f6d40a8fa2f823bbe
│  │  ├─ 79
│  │  │  └─ 2b6bd214c6d3d252ba1c803c3cc2f6853b38e9
│  │  ├─ 7c
│  │  │  ├─ 7cf12bbb890c199f247119d8dab2c46d398248
│  │  │  └─ b02dc0a78e7904618d98db137783d94a308984
│  │  ├─ 8e
│  │  │  └─ c8518b1bb2ae8976c8f709a027ab6135f21dcc
│  │  ├─ 91
│  │  │  └─ a70c63f72ea613a1f198b659b3c3a9eb291230
│  │  ├─ a0
│  │  │  └─ 0ba78e9ed2c5f2e4e31d5cce6d21e5c1e440c0
│  │  ├─ a5
│  │  │  └─ d06bcd2939783b84b127c9af58a1df561c672e
│  │  ├─ a7
│  │  │  └─ f8650d8823fc5a9467f33d447bf3b5351b9452
│  │  ├─ ab
│  │  │  └─ 9b795a778bb27633e206ae96bd19d072e2da09
│  │  ├─ b7
│  │  │  └─ d20dead74eeb046585f23f6c63d8fff4aafb23
│  │  ├─ b8
│  │  │  └─ 78fe7d6c7a0aee870ad6b27bd1c4f6d8ad891a
│  │  ├─ bb
│  │  │  └─ 1d2de8589429f9b1ecd622f962240760e133e2
│  │  ├─ c9
│  │  │  └─ 3bcf27cdef201f213ba0c6b92f0d51a6051758
│  │  ├─ de
│  │  │  └─ b307dd283536cdad2460fdda2e4ff6e412bcaf
│  │  ├─ e1
│  │  │  └─ f217bfecbb824b669767cc24d9daa79420786f
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ f7
│  │  │  └─ db4e9aa58420c7ee83b295e24f4e50febbde0f
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     └─ tags
├─ .gitignore
├─ .prettierrc.json
├─ README.md
├─ index.html
├─ package.json
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.tsx
│  ├─ api
│  │  └─ IMovieApi.tsx
│  ├─ components
│  │  ├─ Header.tsx
│  │  └─ MovieCard.tsx
│  ├─ index.tsx
│  ├─ reducers
│  │  ├─ MovieReducer.tsx
│  │  └─ ThemeReducer.tsx
│  ├─ store.tsx
│  ├─ styles
│  │  └─ GlobalStyles.ts
│  └─ vite-env.d.ts
├─ styled.d.ts
├─ theme.ts
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock

```