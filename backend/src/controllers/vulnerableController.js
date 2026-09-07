import db from "../libs/db.js";

// =========== Bypass frontend
export const buyTicketVulnerable = (req, res) => {
  try {
    const { quantity } = req.body;
    const ticketPrice = 500000;
    const totalPrice = ticketPrice * quantity;

    // Logic lỗi: Ghép chuỗi SQL trực tiếp
    const stmt = db.prepare(
      `INSERT INTO tickets (user_id, quantity, total_price) VALUES (${userId}, ${quantity}, ${totalPrice})`,
    );
    stmt.run();

    res.json({ message: "Mua vé thành công (Vulnerable)!", totalPrice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
