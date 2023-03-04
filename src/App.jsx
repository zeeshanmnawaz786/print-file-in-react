import React, { forwardRef } from "react";
import { useReactToPrint } from "react-to-print";
import image from "./images/image-1.png";

const ComponentToPrint = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>
        <div align="center">
          {image && <img src={image} width="500" alt="Random Image" />}
        </div>
        <div style={{ fontSize: "40px", color: "green" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
          viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Eu
          lobortis elementum nibh tellus. Urna molestie at elementum eu
          facilisis sed odio morbi quis. Et molestie ac feugiat sed lectus
          vestibulum mattis ullamcorper. Ut tellus elementum sagittis vitae et.
          Leo urna molestie at elementum. Vestibulum rhoncus est pellentesque
          elit ullamcorper dignissim. Sollicitudin nibh sit amet commodo nulla
          facilisi. Amet luctus venenatis lectus magna. Ultricies integer quis
          auctor elit sed vulputate mi.
        </div>
        <div style={{ color: "blue" }}>
          Characteristics of active learning 1. You look for ways of being more
          involved in what you are learning. 2. You are engaged in the whole
          learning process (and in a position to see why information has been
          selected). 3. You look for links between different things that you
          discover. 4. You make a conscious effort to make sense of, and find
          meaning in, what you learn. Understanding is usually deeper. 5. You
          are involved in reflection and self-evaluation. 6. Your attention span
          is longer because your mind is more fully engaged. 7. Long-term memory
          is assisted. If you understand what you learn, and keep relating what
          you learn to what you already know, you are more likely to remember
          what you have learnt. 8. Linking information helps you to see how you
          can apply it to different situations. 9. Learning is personalised and
          interesting.
        </div>
      </div>
    </div>
  );
});

const App = () => {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default App;
