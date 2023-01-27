import styled, { css } from 'styled-components';
import React, { ReactNode, useState } from 'react';

type styleProps = {
  flag?: boolean;
  len?: number;
  inputLen?: number;
};

function WordList({ inputWord, count, blockArr }) {
  //몇번째 블럭인지 상태값 필요

  return (
    <WordDiv>
      {blockArr.map((item) =>
        item.id === count ? (
          <Word as="div" key={item.id} inputLen={inputWord.length}>
            <WordBlock as="div" flag={inputWord.length - 1 >= 0 ? true : null}>
              {inputWord[0]}
            </WordBlock>
            <WordBlock flag={inputWord.length - 1 >= 1 ? true : null}>{inputWord[1]}</WordBlock>
            <WordBlock flag={inputWord.length - 1 >= 2 ? true : null}>{inputWord[2]}</WordBlock>
            <WordBlock flag={inputWord.length - 1 >= 3 ? true : null}>{inputWord[3]}</WordBlock>
            <WordBlock flag={inputWord.length - 1 >= 4 ? true : null}>{inputWord[4]}</WordBlock>
            <WordBlock flag={inputWord.length - 1 >= 5 ? true : null}>{inputWord[5]}</WordBlock>
          </Word>
        ) : (
          <Word key={item.id}>
            <WordBlock>{item.word && item.word[0]}</WordBlock>
            <WordBlock>{item.word && item.word[1]}</WordBlock>
            <WordBlock>{item.word && item.word[2]}</WordBlock>
            <WordBlock>{item.word && item.word[3]}</WordBlock>
            <WordBlock>{item.word && item.word[4]}</WordBlock>
            <WordBlock>{item.word && item.word[5]}</WordBlock>
          </Word>
        ),
      )}
    </WordDiv>
  );
}

export default WordList;

const WordDiv = styled.div`
  margin-top: 8rem;
`;
const Word = styled.div<styleProps>`
  display: flex;
  justify-content: center;
  margin-bottom: 7px;

  ${(props) =>
    props.inputLen === 6
      ? css`
          --tw-text-opacity: 1;
          color: rgb(248 113 113 / var(--tw-text-opacity));
        `
      : null}
`;
const WordBlock = styled.div<styleProps>`
  height: 65px;
  width: 65px;
  border: ${(props) => (props.flag ? '1px solid rgb(0 0 0)' : '1px solid rgb(193 185 185)')};
  //border-color: rgb(0 0 0 / var(--tw-border-opacity));
  border-radius: 5px;
  margin-right: 7px;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  align-items: center;
`;
