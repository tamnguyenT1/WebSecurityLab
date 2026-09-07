import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const Vulnerable = () => {
  const handleBuyTicket = async () => {
    const quantity = formData.get("quantity");
  };

  return (
    <form className="flex justify-center" onSubmit={handleBuyTicket}>
      <Card className="p-4 w-full max-w-[500px]">
        <CardHeader className="font-semibold">
          Student Concert Ticket
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p>Vé tham dự chương trình dành cho sinh viên</p>
          <p>
            <strong className="text-red-600">500.000</strong>
          </p>
          <p>
            Giới giạn: <strong>tối đa 2 vé / sinh viên</strong>
          </p>
          <p>Số lượng:</p>
          <Input
            type="number"
            min="1"
            max="2"
            defaultValue={1}
            value={quantity}
            className="border border-gray-600 w-20 p-1 "
          />
          <Button type="submit">Mua vé</Button>
        </CardContent>
      </Card>
    </form>
  );
};

export default Vulnerable;
