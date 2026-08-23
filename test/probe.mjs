import { greet } from "@hyphened/product-playbook-rehearsal-4";
if (greet("rehearsal") !== "hello, rehearsal") throw new Error("probe failed");
console.log("probe ok");
