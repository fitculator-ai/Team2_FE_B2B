import Icon from "./Icon/Icon";

export default function Accordion({ question, content }) {
  return (
    <details className="w-2xl open:h-28">
      <summary className="list-none border-t border-gray-200 bg-gray-50 px-2 py-3 font-semibold in-open:mb-2 in-open:border-[#1E88E5]">
        {question}
      </summary>
      <Icon name="icon-plus" color="#000"></Icon>
      {content}
    </details>
  );
}
