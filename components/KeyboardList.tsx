import styled from 'styled-components';
import { useEffect, useRef } from 'react';

export default function KeyboardList({ handleInputWord, handleAddWord,inputWord }) {
  const test = '';

  return (
    <KeyboardDiv>
      <Keyboard>
        <KeyboardBox data-val="ㅂ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅂ
        </KeyboardBox>
        <KeyboardBox data-val="ㅈ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅈ
        </KeyboardBox>
        <KeyboardBox data-val="ㄷ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㄷ
        </KeyboardBox>
        <KeyboardBox data-val="ㄱ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㄱ
        </KeyboardBox>
        <KeyboardBox data-val="ㅅ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅅ
        </KeyboardBox>
        <KeyboardBox data-val="ㅛ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅛ
        </KeyboardBox>
        <KeyboardBox data-val="ㅕ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅕ
        </KeyboardBox>
        <KeyboardBox data-val="ㅑ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅑ
        </KeyboardBox>
      </Keyboard>
      <Keyboard>
        <KeyboardBox data-val="ㅁ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅁ
        </KeyboardBox>
        <KeyboardBox data-val="ㄴ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㄴ
        </KeyboardBox>
        <KeyboardBox data-val="ㅇ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅇ
        </KeyboardBox>
        <KeyboardBox data-val="ㄹ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㄹ
        </KeyboardBox>
        <KeyboardBox data-val="ㅎ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅎ
        </KeyboardBox>
        <KeyboardBox data-val="ㅗ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅗ
        </KeyboardBox>
        <KeyboardBox data-val="ㅓ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅓ
        </KeyboardBox>
        <KeyboardBox data-val="ㅏ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅏ
        </KeyboardBox>
        <KeyboardBox data-val="ㅣ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅣ
        </KeyboardBox>
      </Keyboard>
      <Keyboard>
        <KeyboardText data-val="input" onClick={(e) => handleAddWord(e)}>
          입력
        </KeyboardText>
        <KeyboardBox data-val="ㅋ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅋ
        </KeyboardBox>
        <KeyboardBox data-val="ㅌ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅌ
        </KeyboardBox>
        <KeyboardBox data-val="ㅊ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅊ
        </KeyboardBox>
        <KeyboardBox data-val="ㅍ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅍ
        </KeyboardBox>
        <KeyboardBox data-val="ㅠ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅠ
        </KeyboardBox>
        <KeyboardBox data-val="ㅜ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅜ
        </KeyboardBox>
        <KeyboardBox data-val="ㅡ" onClick={(e) => inputWord.length < 6 && handleInputWord(e)}>
          ㅡ
        </KeyboardBox>
        <KeyboardText data-val="delete" onClick={(e) => handleInputWord(e)}>
          삭제
        </KeyboardText>
      </Keyboard>
    </KeyboardDiv>
  );
}

const KeyboardDiv = styled.div``;
const Keyboard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 7px;
`;

const KeyboardBox = styled.button`
  cursor: pointer;
  border: none;
  height: 65px;
  width: 50px;
  border-radius: 5px;
  margin-right: 7px;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  align-items: center;
  font-weight: 700;
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));

  &:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(203 213 225 / var(--tw-bg-opacity));
    transform: scale(1.1);
  }
`;

const KeyboardText = styled.button`
  cursor: pointer;
  border: none;
  height: 65px;
  width: 70px;
  border-radius: 5px;
  margin-right: 7px;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  align-items: center;
  font-weight: 700;
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
  &:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(203 213 225 / var(--tw-bg-opacity));
    transform: scale(1.1);
  }
`;
