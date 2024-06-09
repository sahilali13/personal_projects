import { fetchAccessToken } from '@humeai/voice';
import { VoiceProvider } from '@humeai/voice-react';
import { useEffect, useState } from 'react';
import ChatStage from '@components/ChatStage';

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [clientConfig, setClientConfig] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      // make sure to set these environment variables
      const apiKey = import.meta.env.VITE_HUME_API_KEY || '';
      const clientSecret = import.meta.env.VITE_HUME_CLIENT_SECRET || '';

      const token = (await fetchAccessToken({ apiKey, clientSecret })) || '';

      setClientConfig(import.meta.env.VITE_HUME_CLIENT_CONFIG_ID);
      setAccessToken(token);
    };

    fetchToken();
  }, []);

  return (
    <>
      <VoiceProvider
        auth={{ type: 'accessToken', value: accessToken }}
        configId={clientConfig} // set your configId here
      >
        <ChatStage />
      </VoiceProvider>
    </>
  );
}

export default App;
