import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import InterviewsContainer from './InterviewsContainer';

function renderInterviewsContainer() {
  return render(<MemoryRouter><InterviewsContainer /></MemoryRouter>);
}

jest.mock('react-redux');

describe('InterviewsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      interviews: given.interviews || [],
    }));
  });

  it('calls interviews data', () => {
    renderInterviewsContainer();

    expect(dispatch).toBeCalled();
  });
});
