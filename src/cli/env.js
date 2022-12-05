import { env } from 'node:process';

const parseEnv = () => {
    Object.keys(process.env).forEach((item) => {
        if (item.startsWith('RSS_')) {
            console.log(`${item}=${env[item]}`);
        }
    });
};

parseEnv();
// for Powershell terminal run commands:
// $env:RSS_name="value"; node src/cli/env
// $env:RSS_name1="value1"; $env:RSS_name2="value2"; node src/cli/env
