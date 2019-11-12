import { writeFile } from 'fs';
import { argv } from 'yargs';

declare var require: any;
// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file


// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev --path=/home/ubuntu/wd/`
// we get it from yargs's argv object
let environment = 'dev';
if (argv.environment && argv.environment !== 'undefined') {
  environment = argv.environment;
  require('custom-env').env(environment);
}
console.log(`Running in '${environment}' environment mode.`)

const envPath = argv.path;
if (envPath === undefined || envPath === 'undefined') {
  console.log('Using project root path for .env file.')
  require('dotenv').config();
}  
else{
  console.log(`Using provided path '${envPath}' for .env file.`)
  require('dotenv').config({path: envPath});
}   

// require('custom-env').env(environment);

const isProd = environment === 'prod';

const targetPath = `./src/environments/environment.${environment}.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  hostName: "${process.env.HOST_NAME}"
  // hostPort: "${process.env.HOST_PORY}"
};
`
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
