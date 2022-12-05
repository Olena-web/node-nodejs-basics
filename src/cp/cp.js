import childProcess from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    console.log(process.argv)

    const child = childProcess.fork(__dirname + '/files/script.js', args);

    process.stdin.on('data', (chunk) => {
        if (chunk.toString().includes('CLOSE')) process.exit(0);
        process.stdout.write(`Received from child process: ${chunk.toString()}\n`)
    });

};
spawnChildProcess(['args1', 'args2', 'args3', 'args4']);
