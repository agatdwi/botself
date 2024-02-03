let { downloadContentFromMessage } = await import("@whiskeysockets/baileys");

let handler = async (m, { conn }) => {
	if (!m.quoted) throw "where's message?";
	const buffer = await m.quoted.download();
	const media = m.quoted.mediaMessage[m.quoted.mediaType];
	conn.sendFile(
		m.chat,
		buffer,
		/video/.test(media.mimetype) ? "video.mp4" : "image.jpg",
		media.caption || "",
		m,
	);
};

handler.help = ["readviewonce *ʀᴇᴘʟʏ ꜰᴏᴛᴏ*"];
handler.command = /^(readviewonce|rvo|liat)/i;

export default handler;
