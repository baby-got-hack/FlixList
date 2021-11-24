import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import Data  from './AccordionData';
import './style.css'

const Compiled = () => {
  return (
    <div className="body-color">
      <h1>Frequently asked questions</h1>
      <div className="accordion">
        {Data.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Compiled;