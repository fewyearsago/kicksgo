import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={285}
      height={450}
      viewBox="0 0 285 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="0" ry="0" width="277" height="300" />
      <rect x="0" y="385" rx="0" ry="0" width="110" height="25" />
      <rect x="0" y="316" rx="0" ry="0" width="175" height="56" />
    </ContentLoader>
  );
};

export default Skeleton;
