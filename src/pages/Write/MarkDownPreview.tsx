import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import styled from "@emotion/styled";
import { Font, Color } from "../../styles";

const Preview = styled.div`
  word-break: break-word;
`;

const MarkDownPreview = ({ markdown }: { markdown: string }) => {
  return (
    <Preview>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return (
              <SyntaxHighlighter
                style={nord}
                language={match ? match[1] : "text"}
                PreTag="div"
                customStyle={{ borderRadius: "8px", padding: "16px" }}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            );
          },

          blockquote({ children, ...props }) {
            return (
              <blockquote
                style={{
                  borderLeft: `4px solid ${Color.gray400}`,
                  padding: "12px 16px",
                  margin: "16px 0",
                  backgroundColor: Color.gray100,
                  color: Color.gray700,
                }}
                {...props}
              >
                {children}
              </blockquote>
            );
          },

          h1({ children, ...props }) {
            return <h1 style={{ ...Font.semi24, margin: "16px 0" }} {...props}>{children}</h1>;
          },

          h2({ children, ...props }) {
            return <h2 style={{ ...Font.semi20, margin: "14px 0" }} {...props}>{children}</h2>;
          },

          h3({ children, ...props }) {
            return <h3 style={{ ...Font.semi16, margin: "12px 0" }} {...props}>{children}</h3>;
          },

          b({ children, ...props }) {
            return <b style={Font.bold16} {...props}>{children}</b>;
          },

          em({ children, ...props }) {
            return <em style={{ fontStyle: "italic" }} {...props}>{children}</em>;
          },

          ol({ children, ...props }) {
            return (
              <ol style={{ paddingLeft: "20px", listStyleType: "decimal" }} {...props}>
                {children}
              </ol>
            );
          },

          ul({ children, ...props }) {
            return (
              <ul style={{ paddingLeft: "20px", listStyleType: "disc" }} {...props}>
                {children}
              </ul>
            );
          },

          a({ children, href, ...props }) {
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "underline",
                }}
                {...props}
              >
                {children}
              </a>
            );
          },

          hr() {
            return <hr style={{ border: `1px solid ${Color.gray300}`, margin: "24px 0" }} />;
          }
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Preview>
  );
};

export default MarkDownPreview;
