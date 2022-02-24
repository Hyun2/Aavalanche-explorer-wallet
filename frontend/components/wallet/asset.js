import { Button } from "@mantine/core";
import { useStore } from "../../utils/store";
import { WalletContainer, WalletContent, WalletTitle } from "./style";

const Asset = () => {
  const setActiveTab = useStore((state) => state.setActiveTab);

  return (
    <div>
      <p>ASSET 페이지</p>
      <div>
        <div>0 AVAX</div>
        <Button onClick={() => setActiveTab("TRANSFER_TO")}>보내기</Button>
        <div>활동내역</div>
      </div>
    </div>
  );
};

export default Asset;
