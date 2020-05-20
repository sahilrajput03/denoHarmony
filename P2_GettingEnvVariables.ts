import { config } from "https://deno.land/x/dotenv/mod.ts";
const environment = config(); // Although this seems redundant, but good programmers write code that others can understand. :D
console.log("$LOG:Values of .env file:-", environment);
console.table(environment);
console.log(environment["NODE_ENV"]);
console.log(environment.NODE_ENV);
