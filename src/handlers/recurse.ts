export async function recurse(args: any, context: any, callback: any) {
  await new Promise((resolve) =>
    setTimeout(resolve, 30 * 1000 + Math.floor(Math.random() * 15))
  );
  callback(null, args[0] + args[1]);
}
