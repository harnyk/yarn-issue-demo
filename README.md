# yarn-issue-demo

Does not work:

```
rm yarn.lock node_modules -rf
yarn
grunt --stack
```

Works:

```
rm yarn.lock node_modules -rf
npm install
grunt --stack
```

Note: when i delete the line `"grunt-contrib-less": "^1.4.0",` from `package.json`, and reinstall packages with yarn, it works.
