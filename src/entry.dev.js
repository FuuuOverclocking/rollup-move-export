import { moduleA } from "./moduleA/api";
import { registerModule } from "./core/register";

registerModule(moduleA); // side-effect statement

export * from "./core/index"; // rollup actually moves this statement to line 3 and then makes bundle
