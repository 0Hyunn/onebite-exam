import { Button } from "@/components/ui/button";
import { useDecreaseCount, useIncreaseCount } from "@/store/count";

const Controller = () => {
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button variant="destructive" onClick={decrease}>
        -
      </Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
};

export default Controller;
