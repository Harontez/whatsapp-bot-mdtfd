const { bot, wcg } = require('../lib/')
bot(
  {
    pattern: 'wcg ?(.*)',
    fromMe: true,
    desc: 'word chain game\nwcg start to force start game',
    type: 'game',
    onlyGroup: true,
  },
  async (message, match) => {
    if (match == 'start') {
      return await wcg.start(message.jid, message.participant)
    }
    if (match == 'end') {
      return await wcg.end(message.jid, message.participant)
    }
    wcg.start_game(message.jid, message.participant)
  }
)
