import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}

type InputProps = {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
};

