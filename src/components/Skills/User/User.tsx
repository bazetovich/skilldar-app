import React, { FC } from 'react';
import styled from 'styled-components';
import { faHashtag, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { User as UserT } from '../../../store/views/Skills/types';
import { colors, fonts } from '../../../styles/config';
import { formSkillText } from './User.utils';
import { Rating } from '..';

const User: FC<UserT> = ({ avatarUrl, name, descritpion, skills, location, rating }) => {
  return (
    <Wrap>
      <Avatar src={avatarUrl} title={name} />
      <TopWrap>
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
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #2f3236;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.div`
  position: absolute;
  left: 14px;
  top: 14px;
  height: 122px;
  width: 122px;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ src }: { src: string }) => `url(${src})`};
`;

const TopWrap = styled.div`
  background-color: #34373a;
  padding: 16px 44px 14px 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TopWrapLeft = styled.div`
  padding-right: 16px;
`;

const Name = styled.h4`
  margin-top: 0;
  font-size: 22px;
  font-family: ${fonts.semiBold};
  margin-bottom: 6px;
  color: ${colors.white};
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
`;

const BottomWrap = styled.div`
  padding-left: 150px;
  padding: 14px 44px 14px 150px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const RatingWrap = styled.div`
  margin-right: 16px;
`;

const BottomWrapLeft = styled.div``;

const BottomWrapRight = styled.div``;
