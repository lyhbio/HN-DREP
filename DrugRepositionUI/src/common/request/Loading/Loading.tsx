import { Spin, SpinProps } from 'antd';

export const LoadingComponents = (props: SpinProps) => {
  const { ...more } = props;
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spin spinning tip="loading" {...more} />
    </div>
  );
};
