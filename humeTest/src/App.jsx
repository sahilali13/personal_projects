import { useState, useEffect } from 'react';
import { VoiceProvider } from '@humeai/voice-react';
import { fetchAccessToken } from '@humeai/voice';
import ChatStage from './components/ChatStage.jsx';

function App() {
	const [accessToken, setAccessToken] = useState('');

	useEffect(() => {
		const fetchToken = async () => {
			const apiKey = import.meta.env.VITE_HUME_API_KEY || '';
			const clientSecret = import.meta.env.VITE_HUME_CLIENT_SECRET || '';

			const token =
				(await fetchAccessToken({ apiKey, clientSecret })) || '';

			setAccessToken(token);
		};

		fetchToken();
	}, []);

	return (
		<div className='bg-[#FFF8E1] min-h-screen'>
			<VoiceProvider
				auth={{ type: 'accessToken', value: accessToken }}
				configId={'e7a0c77c-7ea2-4184-9102-8fe807f1dd83'} //
			>
				<ChatStage />
			</VoiceProvider>
		</div>
	);
}

export default App;
