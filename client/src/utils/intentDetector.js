export function detectIntent(message) {
  message = message.toLowerCase();
  if (message.includes("order") || message.includes("buy")) return "order";
  if (message.includes("register") || message.includes("add business")) return "register";
  if (message.includes("nearby") || message.includes("find")) return "search";
  return "general";
}
