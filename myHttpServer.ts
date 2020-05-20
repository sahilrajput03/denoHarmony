// run this file via deno, using command $ deno run -A app.ts
import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of s) {
  req.respond({ body: "Welcome to deno world" });
}
//code below is inaccessible as infinite for loop is executing above.
console.log('hello')
