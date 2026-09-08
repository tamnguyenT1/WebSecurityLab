import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useState } from "react";
import Vulnerable from "./Vulnerable";
import Secure from "./Secure";

type LabMode = "vulnerable" | "secure";

const Lab01 = () => {
  const [activeTab, setActiveTab] = useState<LabMode>("vulnerable");

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
      </main>
    </div>
  );
};

export default Lab01;
