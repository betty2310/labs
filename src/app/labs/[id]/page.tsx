import React from 'react';

type Props = {
  params: { id: string };
};

const LabsDetail = ({ params }: Props) => {
  return <div>{params.id}</div>;
};

export default LabsDetail;
