import { useCount } from "@/store/count";

const Viewer = () => {
  const count = useCount();
  return <div>{count}</div>;
};

export default Viewer;
