import {Link} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ListItem,
  ThumbNailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponent'

import './index.css'

const HomeVideocard = props => {
  const {eachVideo} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = eachVideo

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isdarkTheme} = value
        const textColor = isdarkTheme ? '#f9f9f9' : '231f20'
        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} views<Dot>$#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideocard
