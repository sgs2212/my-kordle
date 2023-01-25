import styled from 'styled-components';
import WordList from '../components/WordList';
import KeyboardList from '../components/KeyboardList';
import { useEffect, useRef, useState } from 'react';
import keypad from '../shared/json/keypad.json';

export default function Home() {
  const [inputWord, setInputWord] = useState([]);
  const [count, setCount] = useState(0);
    const [blockArr, setBlockArr] = useState([
        {
            id: 0,
            test:[]
        },
        {
            id: 1,
            test:[]
        },
        {
            id: 2,
            test:[]
        },
        {
            id: 3,
            test:[]
        },
        {
            id: 4,
            test:[]
        },
        {
            id: 5,
        },
    ]);

  const handleInputWord = (e) => {
    setInputWord([...inputWord, e.target.dataset.val]);
  };

  const handleAddWord = (e) => {
      let copyArr = [...blockArr];

      copyArr[count] = {...copyArr[count], test:[...inputWord]}

      setBlockArr(copyArr);
      setCount(count+1);
      setInputWord([]);
  }

  useEffect(()=>{

      console.log(blockArr);
  },[blockArr])


  return (
    <>
      <WordList inputWord={inputWord} count={count} blockArr={blockArr} />
      <TextDiv>
        <Text>test</Text>
      </TextDiv>
      <KeyboardList handleInputWord={handleInputWord} handleAddWord={handleAddWord} inputWord={inputWord} />
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
