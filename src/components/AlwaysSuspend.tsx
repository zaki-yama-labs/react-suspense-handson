import { sleep } from "../utils/sleep";

export const AlwaysSuspend: React.FC = () => {
  console.log("AlwaysSuspend is rendered");
  throw sleep(1000);
};
