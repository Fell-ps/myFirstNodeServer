import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabaseMemory {
  #videos = new Map();

  list(search) {
    const search te


    const video = sql`select * FROM videos`;
  }

  create(video) {}

  update(id, video) {}

  delete(id, video) {}
}
