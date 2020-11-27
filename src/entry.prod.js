import { registerModule } from "./core/register";

registerModule(null); // side-effect statement

export * from "./core/index"; // rollup moves this statement to line 2
