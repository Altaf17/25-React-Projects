import { useState } from "react";
import data from "./Data";
import "./Accordian.css";

const Accordian = () => {
  const [select, setSelect] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelect(id === select ? null : id);
  };

  const handleMultiSelection = (id) => {
    let copyMultiple = [...multiple];
    console.log(copyMultiple);
    const findCurrentIndex = copyMultiple.indexOf(id);
    console.log(findCurrentIndex);
    if (findCurrentIndex === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(findCurrentIndex, 1);
    }
    setMultiple(copyMultiple);
  };
  return (
    <>
      <h1>Accordian</h1>
      <div className="acc-wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Enable Multi Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((data) => {
              return (
                <div className="item" key={data.id}>
                  <div
                    className="title"
                    onClick={
                      enableMultiSelection
                        ? () => handleMultiSelection(data.id)
                        : () => handleSingleSelection(data.id)
                    }
                  >
                    <h3>{data.question}</h3>
                    <span>+</span>
                  </div>
                  {select === data.id || multiple.indexOf(data.id) !== -1 ? (
                    <div className="content">{data.answer}</div>
                  ) : null}
                </div>
              );
            })
          ) : (
            <div>No Data Found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
