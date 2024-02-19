# What is this?

This repo bundles the `ipfs-only-hash` package that can be run on Lit Action. It accepts a variable, `dataToHash`, supplied through `jsParams`, utilizes the package to hash the data, and then returns the `cid` in a JSON response.

The target platform has set to `browser` in the esbuild config as it polyfills the `crypto` package as it's not being supported on Lit Action by default.

# Getting started

You will need Bun to run the scripts

```
// to build
bun run build
```

Then, copy and paste the code from `./dist/bundle.js` and paste it to https://explorer.litprotocol.com/create-action to get the ipfs cid.