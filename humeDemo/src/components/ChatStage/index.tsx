import { useVoice } from '@humeai/voice-react';
import { AvatarProvider } from '@store/AvatarProvider';
import React from 'react';
import { match } from 'ts-pattern';
import { Bars, ThreeDots } from 'react-loader-spinner';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

const ChatStage: React.FC = () => {
  const { connect, disconnect, status } = useVoice();

  const handleConnect = () => {
    if (status.value === 'connected') {
      disconnect();
      return;
    }
    void connect()
      .then(() => {})
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="font-nationalPark absolute inset-0 size-full bg-blue-50 flex flex-col justify-center items-center">
      <h1 className="absolute top-6 text-4xl font-bold">Hume Demo</h1>
      <div>
        {match(status.value)
          .with('error', () => {
            return (
              <div>
                <p>Something went wrong</p>
                <button onClick={() => handleConnect()}>Try again</button>
              </div>
            );
          })
          .with('disconnected', () => {
            return (
              <HiOutlineDotsHorizontal className="text-[7rem] text-blue-800" />
            );
          })
          .with('connecting', () => {
            return (
              <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="blue"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            );
          })
          .with('connected', () => {
            return (
              <AvatarProvider>
                <Bars
                  height="80"
                  width="80"
                  color="blue"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </AvatarProvider>
            );
          })
          .exhaustive()}
      </div>
      <button
        onClick={() => handleConnect()}
        className="absolute bottom-12 w-48 bg-blue-200 px-6 py-4 rounded-full 9 font-bold border-4 border-black text-xl hover:bg-blue-200/60 transition"
      >
        {status.value === 'connected' ? 'End chat' : 'Start chat!'}
      </button>
    </div>
  );
};

export default ChatStage;
