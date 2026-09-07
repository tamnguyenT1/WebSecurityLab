import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Vulnerable from "./Vulnerable";
import Secure from "./Secure";
import api from "@/lib/axios";

type LabMode = "vulnerable" | "secure";

const Lab01 = () => {
  const [activeTab, setActiveTab] = useState<LabMode>("vulnerable");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await api.get("/bypass-frontend/lab01/buy-ticket");
        setQuantity(res.data); // Axios tự động parse JSON vào response.data
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };
    fetchTickets();
  }, []);

  const handleTabChange = (mode: LabMode) => {
    setActiveTab(mode);
  };

  return (
    <div>
      <ButtonGroup className="m-5">
        <Button
          onClick={() => handleTabChange("vulnerable")}
          variant="outline"
          className="border-gray-500 cursor-pointer"
        >
          Vulnerable Lab
        </Button>
        <Button
          onClick={() => handleTabChange("secure")}
          variant="outline"
          className="border-gray-500 cursor-pointer"
        >
          Secure Lab
        </Button>
      </ButtonGroup>
      <main className="m-5">
        {activeTab === "vulnerable" ? <Vulnerable /> : <Secure />}

        {/* checkout */}
        <div className="flex justify-center mt-5">
          <Card className="p-4 w-full max-w-[500px]">
            <CardHeader className="font-semibold">Checkout</CardHeader>
            <CardContent className="flex flex-col gap-2">
              <p className="font-semibold text-green-500">
                Challenge Thành Công !!
              </p>
              <p>
                Tổng tiền: <strong className="text-red-600">500.000</strong>
              </p>
              <p>
                Số lượng vé đã mua: <strong>5</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Lab01;
