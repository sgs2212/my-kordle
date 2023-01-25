import styled from 'styled-components';
import WordList from '../components/WordList';
import KeyboardList from '../components/KeyboardList';
import { useEffect, useRef, useState } from 'react';
import keypad from '../shared/json/keypad.json';

export default function Home() {
  const [inputWord, setInputWord] = useState([]);
  const [count, setCount] = useState(1);

  const handleInputWord = (e) => {
    setInputWord([...inputWord, e.target.dataset.val]);
  };

  useEffect(() => {
    console.log(inputWord);
  }, [inputWord]);

  return (
    <>
      <WordList inputWord={inputWord} count={count} />
      <TextDiv>
        <Text>test</Text>
      </TextDiv>
      <KeyboardList handleInputWord={handleInputWord} />
    </>
  );
}

const TextDiv = styled.div``;
const Text = styled.div`
  padding: 1.5rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
`;
