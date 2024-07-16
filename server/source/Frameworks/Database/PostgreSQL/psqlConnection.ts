import PG from "pg";
import {
  PGDB,
  PGUSER,
  PGHOST,
  PGPASSWORD,
  PGPORT,
} from "../../../configs/DBConfig";

const { Client } = PG;

const client = new Client({
  host: PGHOST,
  port: Number(PGPORT),
  user: PGUSER,
  password: PGPASSWORD,
  database: PGDB,
  //   ssl: true,
});

// connect()
//   .then(() => console.info("PSQL connection successfull"))
//   .catch((err) => console.error("PSQL connection error", err));

async function connect() {
  await client.connect();
}
