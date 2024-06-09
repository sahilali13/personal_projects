import { useVoice } from '@humeai/voice-react';
import { Bars, ThreeDots } from 'react-loader-spinner';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

export default function ChatStage() {
	const { connect, disconnect, status } = useVoice();

	const handleConnect = () => {
		if (status.value === 'connected') {
			disconnect();
			return;
		}
		connect()
			.then(() => {})
			.catch((e) => {
				console.error(e);
			});
	};

	const renderStatus = () => {
		if (status.value === 'error') {
			return (
				<div>
					<p>Something went wrong</p>
					<button onClick={handleConnect}>Try again</button>
				</div>
			);
		} else if (status.value === 'disconnected') {
			return (
				<HiOutlineDotsHorizontal className='text-[7rem] text-blue-800' />
			);
		} else if (status.value === 'connecting') {
			return (
				<ThreeDots
					visible={true}
					height='80'
					width='80'
					color='blue'
					radius='9'
					ariaLabel='three-dots-loading'
					wrapperStyle={{}}
					wrapperClass=''
				/>
			);
		} else if (status.value === 'connected') {
			return (
				<Bars
					height='80'
					width='80'
					color='blue'
					ariaLabel='bars-loading'
					wrapperStyle={{}}
					wrapperClass=''
					visible={true}
				/>
			);
		} else {
			return null;
		}
	};

	return (
		<div className='font-nationalPark absolute inset-0 size-full bg-blue-50 flex flex-col justify-center items-center'>
			<h1 className='absolute top-6 text-4xl font-bold'>
				Hume Voice Demo
			</h1>
			<div>{renderStatus()}</div>
			<button
				onClick={handleConnect}
				className='absolute bottom-12 w-48 bg-blue-200 px-6 py-4 rounded-full font-bold border-4 border-black text-xl hover:bg-blue-200/60 transition'
			>
				{status.value === 'connected' ? 'End chat' : 'Start chat!'}
			</button>
		</div>
	);
}
