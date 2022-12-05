import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
export const __dirname = dirname(fileURLToPath(import.meta.url));

export const create = async () => {
    // Write your code here 
    const content = "I am fresh and young";
    const filePath = path.join(__dirname, "files/fresh.txt");
    try {
        await fs.writeFile(filePath, content, 'utf8', { flag: 'wx' });
        console.log(`The file "fresh.txt" has been successfully written.`);
    } catch (err) {
        // console.log('FS operation failed');
        throw new Error('FS operation failed');

    };
}

await create();