// @ts-ignore
import { lines, rawText, filteredLines } from "./lines.txt";

const Hello = () => (
  <div>
    <h1>Hello, React!</h1>
    <h1>Let's leverage the power of webpack loader</h1>
    <h2>Raw Text</h2>
    <pre>{rawText}</pre>
    <h2>Lines</h2>
    <pre>{JSON.stringify(lines)}</pre>
    <h2>Filtered Lines</h2>
    <pre>{JSON.stringify(filteredLines)}</pre>
  </div>
);

export default Hello;
