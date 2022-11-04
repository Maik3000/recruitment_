import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection } from '../../components';

function Contact() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      /<InfoSection {...homeObjThree} />
     
    
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Contact;
