import { readFile } from "node:fs/promises";

async function readTextFile(filePath) {
  try {
    const recipe = await readFile(filePath);
    console.log(recipe);
  } catch {
    console.error("Erro de leitura do arquivo");
  }
}
