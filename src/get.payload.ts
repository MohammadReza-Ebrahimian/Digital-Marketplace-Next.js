import dotenv from "dotenv";
import path from "path";
import payload from "payload";
import type { InitOptions } from "payload/config";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    Promise: null,
  };
}

interface Args {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({ InitOptions }: Args = {}) => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("PAYLOAD_SECRET is missing");
  }
  if (cached.client) {
    return cached.client;
  }
  if (!cached.client) {
    cached.Promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: InitOptions?.express ? false : true,
      ...(InitOptions || {}),
    });
  }
  try {
    cached.client = await cached.Promise;
  } catch (e: unknown) {
    cached.Promise = null;
    throw e;
  }

  return cached.client
};
