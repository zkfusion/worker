import jayson from "jayson";
export const getServer = () =>
  new jayson.server(
    {
      echo: function echo(args: any, context: any, callback: any) {
        callback(null, args);
      },
    },
    { useContext: true }
  );

const server = getServer();
server.http().listen(3000);
