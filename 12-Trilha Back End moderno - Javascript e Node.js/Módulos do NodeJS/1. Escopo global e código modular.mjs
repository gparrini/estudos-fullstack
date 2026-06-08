import { totalmem, freemem } from "node:os";

console.log(totalmem() / 1024 / 1024 / 1024);
console.log(freemem() / 1024 / 1024 / 1024);
