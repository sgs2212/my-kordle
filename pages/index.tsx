import styled from 'styled-components';
import WordList from '../components/WordList';
import KeyboardList from '../components/KeyboardList';
import { useCallback, useEffect, useRef, useState } from 'react';
import keypad from '../shared/json/keypad.json';
import * as hangul from 'hangul-js';
import { keyboard_change } from '../shared/utils';

export default function Home() {
  const [inputWord, setInputWord] = useState([]);
  const [wordCount, setWordCount] = useState(0); //각 단어의 순서(자릿수)
  const [count, setCount] = useState(0); //전체 횟수(6번)
  const [blockArr, setBlockArr] = useState([
    {
      id: 0,
      word: [],
    },
    {
      id: 1,
      word: [],
    },
    {
      id: 2,
      word: [],
    },
    {
      id: 3,
      word: [],
    },
    {
      id: 4,
      word: [],
    },
    {
      id: 5,
      word: [],
    },
  ]);

  // useEffect(() => {
  //   document.addEventListener('keypress', (e) => {
  //     // if (inputWord.length > 6) {
  //     //   return;
  //     // }
  //     console.log(e.isComposing);
  //     const keyValue = keyboard_change(e.key);
  //     if (keyValue === 'default') {
  //       e.preventDefault();
  //     } else {
  //       handleKeyboardInput(keyValue);
  //     }
  //   });
  //   return () => {
  //     document.removeEventListener('keypress', (e) => handleKeyboardInput(e));
  //   };
  // }, [wordCount]);

  const handleKeyboardInput = (keyValue) => {
    // console.log('tt');
    // const keyValue = keyboard_change(e.key);
    setInputWord([...inputWord, keyValue]);
    setWordCount(wordCount + 1);
  };

  const handleInputWord = (e) => {
    setInputWord([...inputWord, e.target.dataset.val]);
    setWordCount(wordCount + 1);
  };

  const handleAddWord = useCallback((e) => {
    let copyArr = [...blockArr];

    copyArr[count] = { ...copyArr[count], word: [...inputWord] };

    setBlockArr(copyArr);
    setCount(count + 1);
    setInputWord([]);
    setWordCount(0);
  }, []);

  const handleDeleteWord = useCallback(() => {
    let tempArr = inputWord.filter((el, index) => index < inputWord.length - 1);
    setInputWord(tempArr);
  }, []);

  return (
    <>
      <WordList inputWord={inputWord} count={count} blockArr={blockArr} />
      <TextDiv>
        <Text as="div">{hangul.assemble(inputWord) || ''}</Text>
      </TextDiv>
      <KeyboardList handleInputWord={handleInputWord} handleAddWord={handleAddWord} handleDeleteWord={handleDeleteWord} />
    </>
  );
}

const TextDiv = styled.div`
  padding: 10px;
  height: 2rem;
`;
const Text = styled.div`
  //padding: 10px;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
`;
