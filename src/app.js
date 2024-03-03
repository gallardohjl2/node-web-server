import { envs } from "./config/evn.js";
import { startServer } from "./server/server.js";

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
};

// Agnóstica por que no tiene nombre
// Función agnóstica autoinvocada
// Autoinvocada por que se ejecuta con los parentesis
((async) => {
  main();
})();
