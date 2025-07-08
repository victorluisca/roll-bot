const { SlashCommandBuilder } = require("discord.js");

function roll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription("Rolls a random number")
    .addIntegerOption((option) =>
      option
        .setName("max")
        .setDescription("Maximum number to roll")
        .setRequired(true)
    ),
  async execute(interaction) {
    const max = interaction.options.getInteger("max");

    if (max <= 1) {
      await interaction.reply({
        content: "Please enter a number greater than 1",
        ephemeral: true,
      });
      return;
    }

    const result = roll(1, max);
    await interaction.reply(
      `${interaction.user.username} rolls ${result} (1-${max})`
    );
  },
};
