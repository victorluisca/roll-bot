const { SlashCommandBuilder } = require("discord.js");

function flip() {
  return Math.floor(Math.random() * 2);
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("flip")
    .setDescription("Randomly flip a coin to get heads or tails."),
  async execute(interaction) {
    const result = flip();

    if (result === 0) {
      await interaction.reply(
        `**${interaction.user.username}** flipped a coin: *HEADS*`
      );
    } else {
      await interaction.reply(
        `**${interaction.user.username}** flipped a coin: *TAILS*`
      );
    }
  },
};
