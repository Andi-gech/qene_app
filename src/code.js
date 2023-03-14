import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

function Code({ code, language }) {
  return (
    <code>
      <SyntaxHighlighter language={language} style={darcula} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </code>
  );
}

export default Code;
