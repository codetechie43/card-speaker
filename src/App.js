import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #121212;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const guestSpeakers = [
  { image: 'url-to-image1.jpg', description: 'Guest Speaker 1\nTopic: AI & ML' },
  { image: 'url-to-image2.jpg', description: 'Guest Speaker 2\nTopic: Blockchain' },
  { image: 'url-to-image3.jpg', description: 'Guest Speaker 3\nTopic: Web Development' },
  { image: 'url-to-image4.jpg', description: 'Guest Speaker 4\nTopic: Cybersecurity' },
  { image: 'url-to-image5.jpg', description: 'Guest Speaker 5\nTopic: Cloud Computing' },
  { image: 'url-to-image6.jpg', description: 'Guest Speaker 6\nTopic: Data Science' },
  { image: 'url-to-image7.jpg', description: 'Guest Speaker 7\nTopic: DevOps' },
  { image: 'url-to-image8.jpg', description: 'Guest Speaker 8\nTopic: IoT' },
];

const App = () => (
  <MainContainer>
    {guestSpeakers.map((speaker, index) => (
      <Card key={index} image={speaker.image} description={speaker.description} />
    ))}
  </MainContainer>
);

export default App;
