import { mediafiredl } from "@bochilteam/scraper";
let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (!args[0])
		throw `Example\n${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`;
	let res = await mediafiredl(args[0]);
	let { url, url2, filename, ext, aploud, filesize, filesizeH } = res;
	let caption = `
*Name:* ${filename}
*Size:* ${filesizeH}
*Extension:* ${ext}
*Uploaded:* ${aploud}
`.trim();
	m.reply(caption);
	await conn.sendFile(m.chat, url, filename, "", m, null, {
		mimetype: ext,
		asDocument: true,
	});
};
handler.help = ["mediafire *𝒖𝒓𝒍*"];
handler.command = /^(mediafire|mf)$/i;

export default handler;
