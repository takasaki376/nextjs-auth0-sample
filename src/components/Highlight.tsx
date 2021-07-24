import "highlight.js/styles/monokai-sublime.css";

import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import type { ReactNode, VFC } from "react";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  testId?: string;
};

export const Highlight: VFC<Props> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const codeNode = useRef<HTMLElement>(null);
  const language = "json";

  useEffect(() => {
    try {
      hljs.registerLanguage(language, json);
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
      throw Error(`Cannot register the language ${language}`);
    }
  }, []);

  useEffect(() => {
    if (codeNode && codeNode.current) {
      const ref: HTMLElement = codeNode.current;
      hljs.highlightBlock(ref);
    }
  });

  if (!isLoaded) return null;

  return (
    <pre className="rounded" data-testid={props.testId}>
      <code ref={codeNode} className={language}>
        {props.children}
      </code>
    </pre>
  );
};
