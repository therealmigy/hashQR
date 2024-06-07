import { nanoid } from 'nanoid'
import qr from 'qr-image';
import * as fs from 'node:fs';

const qrCodePath = './qr-codes';
let idx = process.argv[2] || 10; // Process # specified in CLI or default to 10
let nanoIds = [];
while (idx--) {
    nanoIds.push(nanoid());
}

if (!fs.existsSync(qrCodePath)) {
    fs.mkdirSync(qrCodePath);
}

nanoIds.map((value) => {
    const qrImage = qr.image(value, { type: 'png'});
    qrImage.pipe(fs.createWriteStream(`${qrCodePath}/${value}.png`));
});
