const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

async function writeExifImg(buffer, options = {}) {
    let stickerOptions = {
        pack: options.packname || "Sticker Pack",
        author: options.author || "Bot",
        type: StickerTypes.FULL,
        quality: 50
    };

    const sticker = new Sticker(buffer, stickerOptions);
    return await sticker.toBuffer();
}

module.exports = { writeExifImg };