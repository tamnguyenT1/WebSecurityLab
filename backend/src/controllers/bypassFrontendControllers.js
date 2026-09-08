// =============lab01
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

export const buyTicketSecure = (req, res) => {
  try {
    const { quantity } = req.body;

    if (quantity > 2) {
      return res.json({ message: "Chỉ được mua tối đa 2 vé" });
    }

    const price = 500000;
    const total = quantity * price;

    return res.status(200).json({ quantity, total });
  } catch (error) {
    console.log(error);
  }
};

// =============lab02
export const buyTicketLab02Vulnerable = (req, res) => {
  try {
    const { quantity, discount } = req.body;
    const price = 500000;
    let total = 0;

    if (discount === 0) {
      total = quantity * price;
    } else {
      total = quantity * price * (1 - discount / 100);
    }

    return res.status(200).json({ quantity, discount, total });
  } catch (error) {
    console.log(error);
  }
};

export const buyTicketLab02Secure = (req, res) => {
  try {
    const { quantity, value } = req.body;
    const price = 500000;

    if (value > 0) {
      return res.json({ message: "Không được thay đổi giá trị discount !" });
    }

    const total = quantity * price;
    return res.status(200).json({ quantity, value, total });
  } catch (error) {
    console.log(error);
  }
};
