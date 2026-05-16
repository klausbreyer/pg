import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomBytes } from "node:crypto";

const target = ".env.local";

if (existsSync(target)) {
  console.log(`${target} already exists`);
  process.exit(0);
}

const secret = () => randomBytes(32).toString("base64");

const contents = readFileSync(".env.local.example", "utf8")
  .replace('BETTER_AUTH_SECRET="random-string-of-characters"', `BETTER_AUTH_SECRET="${secret()}"`)
  .replace('CRYPTO_KEY="random-string-of-characters"', `CRYPTO_KEY="${secret()}"`);

writeFileSync(target, contents);
console.log(`Created ${target}`);
