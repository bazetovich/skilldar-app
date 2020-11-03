import React, { FC } from 'react';
import styled from 'styled-components';
import { faHashtag, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Visible } from 'react-grid-system';

import { User as UserT } from '../../../store/views/Skills/types';
import { breakPoints, colors, fonts } from '../../../styles/config';
import { formSkillText } from './User.utils';
import { Rating } from '..';

const User: FC<UserT> = ({ avatarUrl, name, descritpion, skills, location, rating }) => {
  return (
    <Wrap>
      <Visible lg xl xxl>
        <Avatar src={avatarUrl} title={name} />
      </Visible>
      <TopWrap>
        <Visible xs sm md>
          <Avatar src={avatarUrl} title={name} />
        </Visible>
        <TopWrapLeft>
          <Name>{name}</Name>
          <Description>{descritpion}</Description>
        </TopWrapLeft>
        <TopWrapRight>
          {rating && (
            <>
              <RatingWrap>
                <Rating value={rating.value1} color={colors.blue} />
                <Rating value={rating.value2} color={colors.primaryRed} />
              </RatingWrap>
              <OverallRating>{rating.overall}</OverallRating>
            </>
          )}
        </TopWrapRight>
      </TopWrap>
      <BottomWrap>
        <BottomWrapLeft>
          {skills.length ? (
            <>
              <HashIcon size="1x" color={colors.primaryRed} icon={faHashtag} />
              <SkillsText>{formSkillText(skills)}</SkillsText>
            </>
          ) : null}
        </BottomWrapLeft>
        <BottomWrapRight>
          <CityIcon size="1x" color={colors.white} icon={faUniversity} />
          <LocationText>{location}</LocationText>
        </BottomWrapRight>
      </BottomWrap>
    </Wrap>
  );
};

export default User;

const Wrap = styled.div`
  min-height: 150px;
  margin-bottom: 26px;
  box-shadow: 3px 3px 0px 0px rgba(26, 27, 28, 1);
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #2f3236;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Avatar = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ src }: { src: string }) => `url(${src})`};

  @media (min-width: ${breakPoints.lg}) {
    position: absolute;
    left: 14px;
    top: 14px;
    height: 122px;
    width: 122px;
  }
`;

const TopWrap = styled.div`
  background-color: #34373a;
  padding: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: ${breakPoints.sm}) {
    flex-wrap: nowrap;
  }

  @media (min-width: ${breakPoints.lg}) {
    padding: 16px 44px 14px 150px;
  }
`;

const TopWrapLeft = styled.div`
  padding-left: 16px;
  flex: 1;

  @media (min-width: ${breakPoints.sm}) {
    font-size: 22px;
    padding-right: 16px;
  }

  @media (min-width: ${breakPoints.lg}) {
    padding-left: 0;
  }
`;

const Name = styled.h4`
  margin-top: 0;
  font-size: 16px;
  font-family: ${fonts.semiBold};
  margin-bottom: 6px;
  color: ${colors.white};

  @media (min-width: ${breakPoints.xl}) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${colors.white};
`;

const HashIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  margin-right: 6px;
`;

const CityIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  margin-right: 6px;
`;

const SkillsText = styled.span`
  font-size: 15px;
  color: ${colors.white};
  font-family: ${fonts.semiBold};
`;

const OverallRating = styled.span`
  font-size: 15px;
  color: ${colors.white};
  font-family: ${fonts.semiBold};
`;

const LocationText = styled.span`
  font-size: 13px;
  color: ${colors.white};
`;

const TopWrapRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: 14px;

  @media (min-width: ${breakPoints.sm}) {
    padding-top: 0;
    width: auto;
  }
`;

const BottomWrap = styled.div`
  padding-left: 150px;
  padding: 14px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: ${breakPoints.lg}) {
    padding: 16px 44px 14px 150px;
  }
`;

const RatingWrap = styled.div`
  margin-right: 16px;
`;

const BottomWrapLeft = styled.div`
  padding-right: 14px;
`;

const BottomWrapRight = styled.div``;
