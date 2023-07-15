function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AlwaysSuspend: React.FC = () => {
  console.log("AlwaysSuspend is rendered");
  throw sleep(1000);
};
