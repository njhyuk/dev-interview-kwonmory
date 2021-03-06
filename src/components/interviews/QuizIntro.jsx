import React from 'react';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import ButtonStyled from '../common/ButtonStyled';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100% - 2rem)',
  maxWidth: '64rem',
  padding: '2rem 0.625rem',
  backgroundColor: '#fff',
  borderRadius: '.3rem',
  color: '#263747',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
});

const MainInformationStyled = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const TitleStyled = styled.h2({
  fontSize: '2rem',
  fontWeight: '700',
  margin: '.5rem 0',
  paddingBottom: '.4rem',
  borderBottom: '2px solid #fff',
});

const DescriptionStyled = styled.p({
  fontSize: '1.5rem',
  fontWeight: '500',
  opacity: '.9',
  margin: '.5rem 0 .5rem 0',
});

const SubDescriptionStyled = styled.p({
  marginBottom: '2rem',

  span: {
    color: '#546EF6',
    fontWeight: '700',
  },
});

const SubInformationStyled = styled.div({

});

const InformationStyled = styled.div({
  padding: '1rem',

  h3: {
    fontSize: '.8rem',
    fontWeight: '700',
    marginBottom: '.5rem',
    color: '#546EF6',
  },

  ol: {
    li: {
      marginBottom: '.4rem',
      span: {
        color: '#546EF6',
        fontWeight: '600',
      },
    },
  },
});

const Divider = styled.div({
  width: '100%',
  height: '0.0625rem',
  backgroundColor: '#D7E2EB',
});

const QuizIntro = ({ quiz, onStartButton }) => (
  <Wrapper>
    <MainInformationStyled>
      <TitleStyled>{quiz.title}</TitleStyled>
      <DescriptionStyled>{quiz.description}</DescriptionStyled>
      <SubDescriptionStyled>
        문제는 총
        {' '}
        <span>{quiz.problems?.length}</span>
        {' '}
        문제로 구성되어있습니다.
      </SubDescriptionStyled>
    </MainInformationStyled>
    <Divider />

    <SubInformationStyled>
      <InformationStyled>
        <h3>
          진행안내
        </h3>
        <ol>
          <li>
            1. 인터뷰즈는
            {' '}
            <span>문제</span>
            {' '}
            <FontAwesomeIcon icon={faCaretRight} />
            {' '}
            <span>셀프 피드백</span>
            {' '}
            <FontAwesomeIcon icon={faCaretRight} />
            {' '}
            <span>문제</span>
            {' '}
            <FontAwesomeIcon icon={faCaretRight} />
            {' '}
            <span>셀프 피드백 ...</span>
            {' '}
            <FontAwesomeIcon icon={faCaretRight} />
            {' '}
            <span>최종 피드백</span>
            으로 이루어져있습니다.
          </li>
          <li>
            2. 각 답변에 시간 제한이 있습니다.
          </li>
          <li>
            3. 각 질문에
            {' '}
            <span>스스로 자유롭게</span>
            {' '}
            면접관에게 대답하듯이 하시고 다음으로 넘어가면 됩니다.
          </li>
          <li>
            4. 답변이 끝났을 경우
            {' '}
            <span>다음</span>
            을 눌러 자신이 답변한 부분에 대해서 피드백을 작성해주세요.
          </li>
          <li>
            4. 모든 질문이 끝나면 문제와 작성된 피드백들을 보여줍니다.
          </li>
        </ol>
      </InformationStyled>

      <InformationStyled>
        <h3>
          활용안내
        </h3>
        <ol>
          <li>
            1. 자신이 작성한 피드백으로 부족한 부분을 공부해야 의미가 있습니다.
          </li>
          <li>
            2. 대답을 잘 할 필요가 없습니다. 피드백을 통해 보완하여 성장하세요.
          </li>
          <li>
            3. 피드백 작성 시 느끼신 감정들을 작성해주세요.
          </li>
        </ol>
      </InformationStyled>

      <InformationStyled>
        <h3>
          주의사항
        </h3>
        <ol>
          <li>
            1. 시작 버튼을 누르면
            {' '}
            <span>타이머</span>
            가 작동하니 유의해주세요.
          </li>
          <li>
            2. 타이머 시간이 0초가 되면 자동으로 다음으로 넘어갑니다.
          </li>
          <li>
            3. 크롬 브라우저와 PC 환경을 권장합니다.
          </li>
        </ol>
      </InformationStyled>
    </SubInformationStyled>

    <ButtonStyled type="button" onClick={onStartButton}>알겠습니다</ButtonStyled>
  </Wrapper>
);

export default QuizIntro;
