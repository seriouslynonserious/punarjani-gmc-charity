import {readFileSync,writeFileSync} from 'node:fs';
const schema=readFileSync('backend/schemas.json','utf8');const validation=readFileSync('backend/validation.mjs','utf8').replaceAll('export ','');
writeFileSync('backend/Code.gs','const SCHEMAS = '+schema+';\n'+validation+'\n'+readFileSync('backend/Code.template.gs','utf8'));
