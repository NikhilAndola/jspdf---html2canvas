import React from "react";
import GenericPdfDownloader from "./GenericPdfDownloader";
import "./styles.css";

function App() {
  return (
    <>
      <GenericPdfDownloader downloadFileName="CustomPdf" rootElementId="root" />

      <div id="testId">
        This is A Downloadable Component dddddddddddddddd ddddddddddddddddddd
        ddddddddddddddd dddddddddddd dddddddddd ddddddddddddddddd ddddddddddd
        ddddddddddddddddddddd
      </div>
      <article>
        <h3>Hey there!</h3>
      </article>
    </>
  );
}

export default App;
