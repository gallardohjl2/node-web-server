const { envs } = require("./config/evn");
const { startServer } = require("./server/server");

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
