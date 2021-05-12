import React from 'react';
import Loader from 'react-loader-spinner';

const style = {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center'
};

export default function ReactLoader() {
  return (
    <Loader
      type="TailSpin"
      color="#00000059"
      height={70}
      width={70}
      style={style}
    />
  );
}
