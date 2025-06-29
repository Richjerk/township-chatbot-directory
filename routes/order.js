const sendWhatsApp = require('../utils/sendWhatsApp');

await sendWhatsApp(userPhone, `Your order has been placed with ${business.name}. We'll notify you once it’s accepted.`);
