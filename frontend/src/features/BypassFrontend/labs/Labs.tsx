import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Badge } from "@/components/ui/badge";

import { Link } from "react-router";

type Level = "easy" | "medium" | "hard";

const levelStyle: Record<Level, string> = {
  easy: "bg-green-200 text-green-800",
  medium: "bg-amber-200 text-amber-800",
  hard: "bg-red-200 text-red-800",
};

interface ILab {
  id: number;
  labLevel: Level;
  title: string;
  disc: string;
  target: string;
  link: string;
}

const labList: ILab[] = [
  {
    id: 1,
    labLevel: "easy",
    title: "HTML Input Restriction",
    disc: "Website bán vé giới hạn mỗi sinh viên chỉ được mua tối đa 2 vé",
    target:
      "Kiểm tra xem giới hạn số lượng có được thực thi tại server hay chỉ tồn tại trên giao diện",
    link: "lab01",
  },
  {
    id: 2,
    labLevel: "easy",
    title: "Hidden Parameter",
    disc: "Web lưu giá sản phẩm trong một hidden input",
    target: "Xác định server lấy giá sản phẩm từ đâu",
    link: "lab02",
  },
  {
    id: 3,
    labLevel: "medium",
    title: "Disabled / Readonly Field",
    disc: "Một số trường dữ liệu bị khoá trên giao diện",
    target:
      "Kiểm tra xem server có tin tưởng các giá trị được gửi từ client hay không",
    link: "lab03",
  },
  {
    id: 4,
    labLevel: "medium",
    title: "Client-side Authorization",
    disc: "Một chức năng quản trị không được hiển thị với tài khoản sinh viên",
    target:
      "Xác định việc ẩn chức năng trên giao diện có đủ để bảo vệ chức năng phía server hay không",
    link: "http",
  },
];

const Labs = () => {
  return (
    <div className="flex  flex-col gap-4 m-5">
      {labList.map((lab) => (
        <Item
          key={lab.id}
          className="border-gray-500"
          render={
            <Link to={lab.link}>
              <ItemContent>
                <Badge className={levelStyle[lab.labLevel]}>
                  {lab.labLevel}
                </Badge>
                <ItemTitle className="font-semibold">
                  Lab0{lab.id} - {lab.title}
                </ItemTitle>
                <ItemDescription>{lab.disc}</ItemDescription>
                <ItemDescription>
                  <strong>Mục tiêu: </strong>
                  {lab.target}
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </Link>
          }
        />
      ))}
    </div>
  );
};

export default Labs;
