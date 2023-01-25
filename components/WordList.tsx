import styled from 'styled-components';
import { ReactNode, useState } from 'react';

export default function WordList({ inputWord, count }) {
  //몇번째 블럭인지 상태값 필요
  const [blockArr, setBlockArr] = useState([
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ]);

  const [blockArr2, setBlockArr2] = useState([
    {
      id0: 0,
      id1: 0,
      id2: 0,
      id3: 0,
      id4: 0,
      id5: 0,
    },
  ]);

  return (
    <WordDiv>
      {blockArr.map((item) =>
        item.id === count ? (
          <Word key={item.id}>
            <WordBlock>{inputWord[0]}</WordBlock>
            <WordBlock>{inputWord[1]}</WordBlock>
            <WordBlock>{inputWord[2]}</WordBlock>
            <WordBlock>{inputWord[3]}</WordBlock>
            <WordBlock>{inputWord[4]}</WordBlock>
            <WordBlock>{inputWord[5]}</WordBlock>
          </Word>
        ) : null,
      )}
      {/*<Word>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*</Word>*/}
      {/*<Word>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*</Word>*/}
      {/*<Word>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*</Word>*/}
      {/*<Word>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*</Word>*/}
      {/*<Word>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*  <WordBlock></WordBlock>*/}
      {/*</Word>*/}
    </WordDiv>
  );
}

const WordDiv = styled.div`
  margin-top: 8rem;
`;
const Word = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 7px;
`;
const WordBlock = styled.div`
  height: 65px;
  width: 65px;
  border: 1px solid rgb(155 150 150);
  border-radius: 5px;
  margin-right: 7px;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  align-items: center;
`;
