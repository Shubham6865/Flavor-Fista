import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="accordion bg-black text-white" id="accordionExample" >
            {items.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                            className={`accordion-button ${index === activeIndex ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.title}
                        </button>
                    </h2>
                    <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${index === activeIndex ? 'show' : ''}`}
                        aria-labelledby={`heading${index}`}
                    >
                        <div className="accordion-body">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
