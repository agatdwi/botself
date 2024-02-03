let handler = async (m, { conn, command, isBotAdmin }) => {
if (!m.quoted) throw 'Reply pesan yang ingin dihapus'

let hapus = m.quoted.sender ? m.message.extendedTextMessage.contextInfo.participant : m.key.participant
let bang = m.quoted.id ? m.message.extendedTextMessage.contextInfo.stanzaId : m.key.id
if (isBotAdmin) return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
if (!isBotAdmin) return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })

}
handler.help = ['del 𝐫𝐞𝐩𝐥𝐲 𝐩𝐞𝐬𝐚𝐧', 'delete 𝐫𝐞𝐩𝐥𝐲 𝐩𝐞𝐬𝐚𝐧']
handler.command = /^d(el(ete|m)|el|fa)?$/i

export default handler
