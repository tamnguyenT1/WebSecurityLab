import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import api from "@/lib/axios";

const Vulnerable = () => {
  const TICKET_PRICE = 500000;
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [resData, setResData] = useState(null);

  const handleBuyTicket = async () => {
    try {
      const res = await api.post("/bypass-frontend/labs/lab02/vulnerable", {
        quantity,
        discount,
      });
      setResData(res.data);
    } catch (error) {
      console.error("Lỗi mua vé:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <Card className="p-4 w-full max-w-[500px]">
          <CardHeader className="font-semibold">
            Student Concert Ticket
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p>Vé tham dự chương trình dành cho sinh viên</p>
            <p>
              <strong className="text-red-600">
                {TICKET_PRICE.toLocaleString()}
              </strong>
            </p>

            <p>Số lượng:</p>
            <Input
              type="number"
              min="1"
              max="2"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-600 w-20 p-1 "
            />
            <p>Discount (%)</p>
            <Input
              type="number"
              value={discount}
              disabled
              onChange={(e) => setDiscount(Number(e.target.value))}
              className="border border-gray-600 w-20 p-1 "
            />
            <p>
              Discount chỉ được hệ thống tự động xác nhận dựa trên loại tài
              khoản
            </p>
            <Button type="submit" onClick={() => handleBuyTicket()}>
              Mua vé
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* checkout */}
      <div className="flex justify-center mt-5">
        <Card className="p-4 w-full max-w-[500px]">
          <CardHeader className="font-semibold">Checkout</CardHeader>
          <CardContent className="flex flex-col gap-2">
            {resData === null ? (
              ""
            ) : resData.discount > 0 ? (
              <p className="font-semibold text-green-500">
                Challenge thành công !! Sản phẩm được giảm giá{" "}
                {resData.discount}%
              </p>
            ) : (
              <p className="font-semibold text-red-500">
                Challenge thất bại !! Sản phẩm chưa được giảm giá
              </p>
            )}

            <p>
              Tổng tiền:{" "}
              <strong className="text-red-600">{resData?.total}</strong>
            </p>
            <p>
              Số lượng vé đã mua: <strong>{resData?.quantity}</strong>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Vulnerable;
