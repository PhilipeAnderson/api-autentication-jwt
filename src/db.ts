import { Pool } from 'pg';

const connectionString = 'postgres://jpppimov:1PP3x_ZY2QCqdLpt91C3DO3zdQAvWncy@chunee.db.elephantsql.com/jpppimov';

const db = new Pool ({ connectionString });

export default db;