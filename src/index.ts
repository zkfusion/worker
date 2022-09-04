import "dotenv/config";
import { getServer } from "./server.js";

const start = async (port: number = 3000) => {
  console.log("Preparing worker node..");

  console.log("Compiling latest prover");
  // await Prover.compile();
  console.log("Prover compiled");

  console.log(`Starting RPC server on port ${port}`);
  const server = getServer();
  server.http().listen(port);
};

start(3000);
