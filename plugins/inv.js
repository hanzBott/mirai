let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let healt = user.healt
    let armor = user.armor 
    let warn = user.warn
    let pet = user.pet
    let kucing = user.kucing
    let _kucing = user.anakkucing
    let rubah = user.rubah
    let _rubah = user.anakrubah
    let kuda = user.kuda
    let _kuda = user.anakkuda
    let diamond = user.diamond
    let potion = user.potion
    let common = user.common
    let makananpet = user.makananpet
    let uncommon = user.uncommon
    let mythic = user.mythic
    let legendary = user.legendary
    let level = user.level
    let uang = user.uang
    let exp = user.exp
    let sampah = user.sampah
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sorteduang = Object.entries(global.db.data.users).sort((a, b) => b[1].uang - a[1].uang)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersuang = sorteduang.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let str = `
Inventory *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*\n
Health: *${healt}*
Armor: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*\n
Uang: *Rp${uang}*
Level: *${level}*
Exp: *${exp}*\n
*Inventory*
Diamond: *${diamond}*
Potion: *${potion}*
Sampah: *${sampah}*
Makanan Pet: *${makananpet}*
Total inv: *${diamond + potion + sampah + makananpet}* item\n
*Crate*
Common: *${common}*
Uncommon: *${uncommon}*
Mythic: *${mythic}*
Legendary: *${legendary}*
Pet: *${pet}*\n
*Pet*
Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*\n\n
*Progress*\n
┏ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┃Level *${level}* To Level *${level + 1}*
┃Exp *${exp}* -> *${max}*
┗ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┏ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┃Rubah ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n┃Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
┗ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┏ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┃Kucing ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n┃Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
┗ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┏ ┅ ━━━━━━━━━━━━━━━ ┅ ━
┃Kuda ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n┃Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
┗ ┅ ━━━━━━━━━━━━━━━ ┅ ━\n\n
*Achievement*
1.Top level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
2.Top Uang *${usersuang.indexOf(m.sender) + 1}* dari *${usersuang.length}*
3.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
5.Top Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
6.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
7.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
8.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
9.Top Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
\n${readMore}\n
Warn: *${warn}*
Banned: *No*
`.trim()
    conn.reply(m.chat, str, m)
}
// handler.help = ['inventory', 'inv']
// handler.tags = ['rpg']
handler.command = /^(inv(entory)?)$/i
handler.register = true
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
