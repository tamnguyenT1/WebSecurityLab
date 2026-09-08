export const buyTicketVulnerable = (req, res) => {
  try {
    const { quantity } = req.body;
    const price = 500000;
    const total = quantity * price;

    return res.status(200).json({ quantity, total });
  } catch (error) {
    console.log(error);
  }
};
