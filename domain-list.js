const suspiciousDomains = [
  "disordapp.codes",
  "discord-full.xyz",
  "discrode-gift.club",
  "discord-gifte.com",
  "bit.ly/3ELDUtj",
  "diiscord-app.com",
  "dlscorcl.gift",
  "dlscorld-glft.xyz",
  "dlscord.net",
  "dlscordnitro.xyz",
  "dlscord.click",
  "dlscocrdapp.com",
  "discordd.gift",
  "discord-apps.fun",
  "diisccord-app.ru",
  "dlscorcl.pw",
  "discoclapp.pw",
  "discordc.gift",
  "steam-discords.com",
  "steamcommunity-nitro.ru",
  "discorcg.xyz",
  "discordsgift.com",
  "discordrgift.com",
  "dlscord.org",
  "discordevents.com",
  "discordt.gift",
  "discorcl.gifts",
  "101nitro.com",
  "boost-discord.com",
  "boostnitro.com",
  "cllscordapp.fun",
  "cpp-discord.com",
  "dicsord-give.com",
  "dicsord-nitro.com",
  "dicsord.net",
  "dirscod.com",
  "discapp.info",
  "discoapps.club",
  "discocrd-nitro.com",
  "discocrd.com",
  "dlscorld-get.xyz",
  "discocrd.gift",
  "discocrdapp.com",
  "discod.art",
  "discod.fun",
  "discod.gift",
  "discod.info",
  "discorb.ru",
  "discorcd.gifts",
  "discorcl-app.com",
  "discorcl.click",
  "discorcl.club",
  "discorcl.gift",
  "discorcl.link",
  "discorclapp.com",
  "discorclapp.fun",
  "discord-air.xyz",
  "discord-airdrop.com",
  "discord-app.me",
  "discord-app.net",
  "discord-app.uk",
  "discord-claim.com",
  "discord-cpp.com",
  "discord-drop.info",
  "discord-free.com",
  "discord-game.com",
  "discord-gifts.com",
  "discord-give.com",
  "discord-give.org",
  "discord-glft.com",
  "discord-help.com",
  "discord-nitro.click",
  "discord-nitro.link",
  "discord-nitro.pro",
  "discord-nitro.su",
  "discord-promo.com",
  "discord-steam.com",
  "discord-steam.ru",
  "discord.foundation",
  "discord.givaewey.com",
  "discord.giveaweys.com",
  "discord.moscow",
  "discordapp.click",
  "discordapp.gg",
  "discordapp.info",
  "discordapp.one",
  "discordcommunlty.com",
  "discordfrnitro.site",
  "discordgift.app",
  "discordgift.ru.com",
  "discordgift.site",
  "discordgifts.ru",
  "discordnitro.click",
  "discordnitrogift.ru",
  "discords-nitro.xyz",
  "discordsteams.com",
  "discordhalloween.com",
  "discorid.gift",
  "discrod-gift.com",
  "discrod.gifts",
  "discrodapp.ru",
  "discrodnitro.org",
  "discrodsteam.ru",
  "diskord.ru.com",
  "disord.gifts",
  "disordgift.codes",
  "dissord.ru",
  "dliscord.us",
  "dlscard.ru",
  "dlscorcl.info",
  "dlscord-app.com",
  "dlscord-app.info",
  "dlscord-nitro.click",
  "dlscord-nitro.link",
  "dlscord.app",
  "dlscord.one",
  "dlscord.wiki",
  "dlscord.work",
  "dlscord.world",
  "dlscordapp.info",
  "dlscordgived.xyz",
  "dlscordnitro.com",
  "driscord.ru",
  "driscord.ru.com",
  "dsicord.gift",
  "free-nitlross.ru",
  "free-nitroi.ru",
  "freenitros.ru",
  "gave-nitro.com",
  "get-nitro.net",
  "giftdiscord.info",
  "giiveaway-discord.com",
  "glets-nitro.com",
  "glft-discord.com",
  "hallowen-nitro.com",
  "nitro-app-store.com",
  "nitroappstore.com",
  "official-nitro.fun",
  "steam-dlscord.com",
  "steamdiscord.com",
  "steamdlscords.com",
  "steamsdiscord.com",
  "steancommunity.link",
  "discordi.gift",
  "discordn.gift",
  "discordgifts.me",
  "discorcd-gift.com",
  "discond.gift",
  "dliscord.com",
  "discordll.gift",
  "discordj.gift",
  "discordgiftz.xyz",
  "dilscord.com",
  "dlscord-nitro.club",
  "discorclgift.net.ru",
  "bit.ly/3we2sYy",
  "bit.ly/dsniitroz",
  "bit.ly/3GMGKzL",
  "disccords.com",
  "discord-get.xyz",
  "discrod-apps.xyz",
  "bit.ly/3CUIog5",
  "discrod-gifte.com",
  "bit.ly/3FoNq5H",
  "dlsccord-apps.club",
  "discord-gg.com",
  "discordg.com.ru",
  "discort-nitro.com",
  "dlsccord-app.club",
  "bit.ly/30ZM1Uc",
  "discorcd-apps.com",
  "dicsord-present.ru",
  "bit.ly/3ldX1ob",
  "discrod-gifts.club",
  "dlsocrd.com",
  "nltroclassic.com",
  "discorde-gift.com",
  "disccord-club.ru",
  "dlcsord-gifte.ru",
  "disordnitros.one",
  "dlscordapps.me",
  "dlsccordclub.com",
  "bit.ly/3pmC5wD",
  "bit.ly/3DWf8X1",
  "disccord-club.com",
  "discordo.org",
  "stearncormnniuty.ru",
  "discordg.link",
  "clck.ru",
  "disordsnitros.gifts",
  "discordrgift.xyz",
  "disocrd-gift.ru",
  "dicsord-gifts.ru",
  "discordrsgift.xyz",
  "disccord-gift.com",
  "dlscord-nitro.me",
  "diisccord-gift.com",
  "fullnltro.com",
  "dicsordgifts.xyz",
  "dicsordgifts.ru",
  "dlscord-glft.me",
  "tinyurl.com/yyw8sy9b",
  "dlscords.shop",
  "dicordglfts.cf",
  "tinyurl.com/yxpwrn87",
  "dlscordrglft.xyz",
  "dlscordsnitros.gifts",
  "tinyurl.com/y4on8wjc",
  "bit.ly/31IgOFy",
  "tinyurl.com/yxfvumae",
  "dlscorld.xyz",
  "gg-nitro.com",
  "dlscord.top",
  "tinyurl.com/y5qhxojv",
  "bit.ly/33pGfML",
  "discordnltro.xyz",
  "dlscrod-gift.com",
  "discordnltro.gift",
  "dlcsordglft.xyz",
  "dlscorld.gifts",
  "discord-full.shop",
  "dlsocrd-gift.com",
  "steamdiscordi.com",
  "tinyurl.com/y6cxn7td",
  "discrod-gift.net.ru",
  "tinyurl.com/y2uu3bmo",
  "dlscord-apps.me",
  "discords-gifts.com",
  "dicsord-gifte.ru.com",
  "nitro-gg.com",
  "tinyurl.com/y26ww3vg",
  "discordnitro.store",
  "discordnitro.gifts",
  "freenitros.com",
  "discord-faq.com",
  "dliscord.gifts",
  "discordgift-nitro.com",
  "discord-nitro.net",
  "dlisocrd.ru",
  "dlisocrd.com",
  "gift-discords.com",
  "discord-free.ru.com",
  "discords-gifts.club",
  "steamdiscordj.com",
  "tinyurl.com/y5lselo9",
  "discorrc-apps.com",
  "discord-appss.ru",
  "nitro-full.xyz",
  "discorde-nitro.com",
  "discord-gifft.com",
  "discrode-gift.com",
  "nitro-ds.com",
  "dlscord-free.ru.com",
  "disordnitro.xyz",
  "dlscord-collaboration.com",
  "steamdiscordc.com",
  "discrode-gift.club",
  "steamsdiscordl.com",
];
