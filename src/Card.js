import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: #1a1a2e;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #e94560;
  margin: 20px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  clip-path: polygon(
    10% 0%,
    90% 0%,
    100% 100%,
    0% 100%
  );

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #e94560;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardDescription = styled.div`
  padding: 20px;
  font-size: 1.1em;
`;

const Card = ({ image, description }) => (
  <CardContainer
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <CardImage src={image} alt="Speaker" />
    <CardDescription>{description}</CardDescription>
  </CardContainer>
);

export default Card;