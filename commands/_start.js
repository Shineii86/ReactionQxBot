/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var button = [
  [
    {
      text: "⛩️ 𝐀ᴅᴅ 𝐌ᴇ 𝐓ᴏ 𝐘ᴏᴜʀ 𝐆ʀᴏᴜᴘ ⛩️",
      url: "http://t.me/ReactionQxBot?startgroup=true"
    }
  ],
  [
    { text: "🧑🏻‍💻 𝐃ᴇvᴇʟᴏᴘᴇʀ", url: "t.me/Shineii86" },
    { text: "𝐔ᴘᴅᴀᴛᴇs 🔰", url: "t.me/MaximXBots" }
  ],
  [{ text: "⛔ 𝐂ʟᴏsᴇ ⛔", callback_data: "/close" }]
]

if (!params) {
  // If params is not provided, send photo with caption and buttons
  Api.sendPhoto({
    photo: "https://telegra.ph/file/be9ad73326e879c130c97.jpg",
    caption:
      "Hey, <a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.first_name +
      "</a> I am an auto-reaction bot. Add me to your group, and I will react automatically to the messages.",
    disable_web_page_preview: true,
    reply_markup: JSON.stringify({ inline_keyboard: button }),
    parse_mode: "html"
  })
  return
} else {
  // If params is provided, delete the current message and notify admin about a new user
  Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
  var hh = ""
  if (!User.getProperty("UserDone")) {
    User.setProperty("UserDone", true, "boolean")
    var stat = Libs.ResourcesLib.anotherChatRes("status", "global")
    stat.add(1)
    Api.sendMessage({
      chat_id: 5572081489,
      text:
        "➕ <b>New User Notification</b> ➕\n\n👤<b>User:</b> <a href='tg://user?id=" +
        user.telegramid +
        "'>" +
        user.first_name +
        "</a> " +
        hh +
        "\n\n🆔<b> User ID :</b> <code>" +
        user.telegramid +
        "</code>\n\n🌝 <b>Total User's Count: " +
        stat.value() +
        "</b>",
      parse_mode: "html",
      disable_web_page_preview: true
    })
  }
}

Bot.sendMessageToChatWithId(
  5572081489,
  "New User\n\nUser ID: " +
    user.telegramid +
    "\nFirst Name : " +
    user.first_name +
    "\nLast Name : " +
    user.last_name +
    "\n\nUsername:  @" +
    user.username +
    ""
)

