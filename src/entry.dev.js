import { moduleA } from "./moduleA/api";
import { registerModule } from "./core/register";

registerModule(moduleA);

export * from "./core/index";
