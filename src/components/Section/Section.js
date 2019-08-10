import React from 'react';
import Images from './Images';
import ImageDiv from './ImageDiv/ImageDiv'
import './Section.css';

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function Section({ handleGuess }) {
  const shuffledImages = shuffleArray(Images);

  return (
    <section className="Section">
      {
        shuffledImages.map((img, key) => {
          return (
            <ImageDiv id={img.id} src={img.src} onClick={handleGuess} key={key}></ImageDiv>
          );
        })
      }
    </section>
  );
}

export default Section;
