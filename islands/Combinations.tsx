import { useEffect, useState } from "preact/hooks";
import { Combination, findCombinations } from "../libs/combinations.ts";
import NumberBox from "./NumberBox.tsx";
import NumberSelectors from "./NumberSelectors.tsx";

type CombinationsProps = { count: number; sum: number };

export default function Combinations(props: CombinationsProps) {
  const [count, setCount] = useState<string | number>(props.count);
  const [sum, setSum] = useState<string | number>(props.sum);
  const [combinations, setCombinations] = useState<Combination[]>([]);
  const [inclusionNumbers, setInclusionNumbers] = useState<string>("");
  const [exclusionNumbers, setExclusionNumbers] = useState<string>("");

  useEffect(() => {
    let results = findCombinations(count as number, sum as number);

    const target1 = inclusionNumbers.split("");
    results = results.filter((c) => c.includeAll(target1));

    const target2 = exclusionNumbers.split("");
    results = results.filter((c) => !c.any(target2));

    setCombinations(results);
  }, [count, sum, inclusionNumbers, exclusionNumbers]);

  return (
    <div class="bg-white rounded-xl shadow-lg shadow-black p-3">
      <div class="flex flex-wrap gap-2">
        <div class="">
          <div class="">
            <NumberBox
              label="count(n)"
              getter={() => count}
              setter={setCount}
            />
          </div>
          <div class="">
            <NumberBox
              label="sum(x)"
              getter={() => sum}
              setter={setSum}
            />
          </div>
        </div>

        <div class="">
          <div class="">
            <NumberSelectors
              label="inclusion"
              textColorOnSelected="blue"
              current={inclusionNumbers}
              setter={setInclusionNumbers}
            />
          </div>
          <div class="">
            <NumberSelectors
              label="exclusion"
              textColorOnSelected="red"
              current={exclusionNumbers}
              setter={setExclusionNumbers}
            />
          </div>
        </div>
      </div>

      <div>
        <div class="mt-5 font-bold text-2xl">
          <p>{combinations.map((c) => c.toString()).join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
