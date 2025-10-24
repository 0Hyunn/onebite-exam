import "./App.css";

function App() {
  return (
    <div>
      {/* 1. 타이포그래피 */}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-extrabold">text-xl</div>
      <div className="text-[oklch(0.5 0.1 270)] text-[13px]">text-custom</div>

      {/* 2. 백그라운드 컬러 */}
      <div className="bg-amber-500">amber-500</div>

      {/* 3. 사이즈 */}
      <div className="h-full w-full bg-blue-500">box</div>

      {/* 4. 여백 (spacing) */}
      <div className="mx-5 my-5 h-50 w-50 bg-red-400 px-5 py-5">
        <div className="h-full w-full bg-blue-400"></div>
      </div>

      {/* 5. border */}
      <div className="m-5 rounded-full border-x-2 border-y-2 border-red-500">
        border
      </div>

      {/* 6. flex container */}
      <div className="flex flex-row items-start justify-evenly">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 flex-1 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
    </div>
  );
}

export default App;
