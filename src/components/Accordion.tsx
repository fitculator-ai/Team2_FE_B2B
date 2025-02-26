export default function Accordion({ question, content }) {
  return (
    <details className="w-2xl">
      <summary className="px-4 py-3 font-semibold">{question}</summary>
      {content}
    </details>
  );
}
