import { getModule } from "./register";

console.log(getModule()); // ⚠ incorrectly print "undefined"

export const abc = 123;
