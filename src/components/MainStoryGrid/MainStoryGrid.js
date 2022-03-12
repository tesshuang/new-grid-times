import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';
import { QUERIES } from '../../constants';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 252px;
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
    gap: 32px;
  }
  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 500px 400px 300px;
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  > a:not(:last-child) {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletOnly} {
    > ${StoryList} {
      flex-direction: row;
      gap: 32px;

      > a {
        padding-bottom: revert;
        margin-bottom: revert;
        border-bottom: none;
      }
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
