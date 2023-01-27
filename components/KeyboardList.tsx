import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';

function KeyboardList({ handleInputWord, handleAddWord, handleDeleteWord }) {
  const test = '';

  return (
    <KeyboardDiv>
      <Keyboard>
        <KeyboardBox data-val="ㅂ" tabIndex={0} onKeyDown={(e) => handleInputWord(e)} onClick={(e) => handleInputWord(e)}>
          ㅂ
        </KeyboardBox>
        <KeyboardBox data-val="ㅈ" onClick={(e) => handleInputWord(e)}>
          ㅈ
        </KeyboardBox>
        <KeyboardBox data-val="ㄷ" onClick={(e) => handleInputWord(e)}>
          ㄷ
        </KeyboardBox>
        <KeyboardBox data-val="ㄱ" onClick={(e) => handleInputWord(e)}>
          ㄱ
        </KeyboardBox>
        <KeyboardBox data-val="ㅅ" onClick={(e) => handleInputWord(e)}>
          ㅅ
        </KeyboardBox>
        <KeyboardBox data-val="ㅛ" onClick={(e) => handleInputWord(e)}>
          ㅛ
        </KeyboardBox>
        <KeyboardBox data-val="ㅕ" onClick={(e) => handleInputWord(e)}>
          ㅕ
        </KeyboardBox>
        <KeyboardBox data-val="ㅑ" onClick={(e) => handleInputWord(e)}>
          ㅑ
        </KeyboardBox>
      </Keyboard>
      <Keyboard>
        <KeyboardBox data-val="ㅁ" onClick={(e) => handleInputWord(e)}>
          ㅁ
        </KeyboardBox>
        <KeyboardBox data-val="ㄴ" onClick={(e) => handleInputWord(e)}>
          ㄴ
        </KeyboardBox>
        <KeyboardBox data-val="ㅇ" onClick={(e) => handleInputWord(e)}>
          ㅇ
        </KeyboardBox>
        <KeyboardBox data-val="ㄹ" onClick={(e) => handleInputWord(e)}>
          ㄹ
        </KeyboardBox>
        <KeyboardBox data-val="ㅎ" onClick={(e) => handleInputWord(e)}>
          ㅎ
        </KeyboardBox>
        <KeyboardBox data-val="ㅗ" onClick={(e) => handleInputWord(e)}>
          ㅗ
        </KeyboardBox>
        <KeyboardBox data-val="ㅓ" onClick={(e) => handleInputWord(e)}>
          ㅓ
        </KeyboardBox>
        <KeyboardBox data-val="ㅏ" onClick={(e) => handleInputWord(e)}>
          ㅏ
        </KeyboardBox>
        <KeyboardBox data-val="ㅣ" onClick={(e) => handleInputWord(e)}>
          ㅣ
        </KeyboardBox>
      </Keyboard>
      <Keyboard>
        <KeyboardText data-val="input" onClick={(e) => handleAddWord(e)}>
          확인
        </KeyboardText>
        <KeyboardBox data-val="ㅋ" onClick={(e) => handleInputWord(e)}>
          ㅋ
        </KeyboardBox>
        <KeyboardBox data-val="ㅌ" onClick={(e) => handleInputWord(e)}>
          ㅌ
        </KeyboardBox>
        <KeyboardBox data-val="ㅊ" onClick={(e) => handleInputWord(e)}>
          ㅊ
        </KeyboardBox>
        <KeyboardBox data-val="ㅍ" onClick={(e) => handleInputWord(e)}>
          ㅍ
        </KeyboardBox>
        <KeyboardBox data-val="ㅠ" onClick={(e) => handleInputWord(e)}>
          ㅠ
        </KeyboardBox>
        <KeyboardBox data-val="ㅜ" onClick={(e) => handleInputWord(e)}>
          ㅜ
        </KeyboardBox>
        <KeyboardBox data-val="ㅡ" onClick={(e) => handleInputWord(e)}>
          ㅡ
        </KeyboardBox>
        <KeyboardText data-val="delete" onClick={(e) => handleDeleteWord(e)}>
          삭제
        </KeyboardText>
      </Keyboard>
    </KeyboardDiv>
  );
}
export default KeyboardList;

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
