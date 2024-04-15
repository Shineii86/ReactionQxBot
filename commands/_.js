/*CMD
  command: *
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

var myEmoji = [
  "👍",
  "❤",
  "🔥",
  "🥰",
  "👏",
  "😁",
  "😱",
  "🎉",
  "🤩",
  "🙏",
  "👌",
  "😍",
  "❤‍🔥",
  "🇮🇳",
  "😇",
  "🤝",
  "🤗",
  "🫡",
  "🗿",
  "🆒",
  "💘",
  "😘",
  "😎"
]

var doEmoji = myEmoji[Math.floor(Math.random() * myEmoji.length)]

HTTP.post({
  url: "https://api.telegram.org/bot" + bot.token + "/setMessageReaction",
  body: {
    chat_id: request.chat.id,
    message_id: request.message_id,
    reaction: JSON.stringify([
      {
        type: "emoji",
        emoji: doEmoji,
        is_big: true
      }
    ])
  }
})

