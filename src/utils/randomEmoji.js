const randomEmoji = () => {
  const emojis = ["đŠâđģ", "đ¨âđģ", "đ§âđģ", "đŽ", "đ", "đšī¸", "đ", "đ"];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export default randomEmoji;
