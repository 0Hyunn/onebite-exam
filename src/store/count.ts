import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// type store = {
//   count: number;
//   actions: {
//     increaseOne: () => void;
//     decreaseOne: () => void;
//   };
// };

/* 1. zustand/middleware - combine 활용
 * 타입을 정의하지 않아도 combine 미들웨어에서 자동으로 타입을 추론

 * 2. zustand/middleware/immer - 미들웨어를 활용해 상태변경을 불변성을 유지하면서 직접 변경할 수 있게 함
 */
export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set, get) => ({
            actions: {
              increaseOne: () => {
                set((state) => {
                  state.count += 1;
                });
              },
              decreaseOne: () => {
                set((state) => {
                  state.count -= 1;
                });
              },
            },
          })),
        ),
      ),
      {
        name: "countStore",
        partialize: (store) => ({ count: store.count }),
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    { name: "countStore" },
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    console.log(count, prevCount);

    const store = useCountStore.getState();
  },
);

// export const useCountStore = create<store>((set, get) => ({
//   count: 0,
//   actions: {
//     increaseOne: () => {
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decreaseOne: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

/**
 * 아래와 같이 커스텀 훅들을 만드는 이유는, 추후 규모가 커질 경우, 각 상태를 직접 불러오기 보다, 커스텀훅으로 리턴해주는 값을 토대로 호출하는 것이 더 효율적이기 때문.
 */
export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increaseOne);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decreaseOne);
  return decrease;
};
