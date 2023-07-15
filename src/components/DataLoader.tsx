import { useMemo, useState } from "react";
import { fetchData1 } from "../data/fetchData1";
import { sleep } from "../utils/sleep";

export const DataLoader: React.VFC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);

  const _ = useMemo(() => {
    if (loading) {
      console.log("loading is true");
    }
    return 1;
  }, [loading]);

  // ローディングフラグが立っていて data がまだなければローディングを開始する
  if (loading && data === null) {
    sleep(500).then(() => setData("boom!"));
    throw fetchData1().then(setData);
  }
  // データがあればそれを表示
  return (
    <div>
      <div>Data is {data}</div>
      <button className="border p-1" onClick={() => setLoading(true)}>
        load
      </button>
    </div>
  );
};
