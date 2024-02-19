const fs = require("fs");
const esbuild = require("esbuild");

await esbuild
  .build({
    entryPoints: ["index.mjs"], // Your entry file
    bundle: true, // Bundle all dependencies into one file
    outfile: "dist/bundle.js", // Output file
    platform: "browser", // Specify target platform
    globalName: "ipfsOnlyHashSdk", // The global variable name
    format: "iife", // Wrap your code in an immediately invoked function expression
  })
  .catch(() => process.exit(1));

const code = `
(async () => {
  let res;

  try{
    res = {
      success: true,
      data: await ipfsOnlyHashSdk.sdk.of(dataToHash),
    }
  }catch(e){
    res = {
      success: false,
      data: e.toString()
    }
  }

  LitActions.setResponse({ 
    response: JSON.stringify(
      { res })
    });
})();`;

fs.appendFileSync("dist/bundle.js", code);
