import React, { useState } from "react";

interface Acc{
   "question":string,
   "answer":string
}

const data: Acc[] = [
  {
   question: 'What are accordion components?',
   answer: 'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.' ,
  },
  {
   question: 'What are they used for?',
   answer: 'They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.',
  },
  {
   question: 'Accordion as a musical instrument',
   answer: 'The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.',
  },
  {
   question: 'Can I create an accordion component with a different framework?',
   answer: 'Yes of course, it is very possible to create an accordion component with another framework.',
  }
 ];

 function Accordion(){
  const [selected, setSelected] = useState<number| null>(null);

  const handleClick = (index:number):void =>{
    setSelected(selected === index ? null : index);
  };
  return (
    <div>
      {data.map((item, index) => (
        <div  key={index}>
          <div  onClick={() => handleClick(index)}>
            <h3>{item.question}</h3>
            <span>{selected === index ? "⌄" : ">"}</span>
          </div>
          {selected === index && <p>{item.answer}</p>}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Accordion;