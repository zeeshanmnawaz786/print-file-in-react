import React, { forwardRef, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const App = forwardRef(() => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div ref={componentRef}>
        <h1>Hello, world!</h1>
      </div>
      <button onClick={handlePrint}>Print</button>
    </>
  );
});

export default App;
