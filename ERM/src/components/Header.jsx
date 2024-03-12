export default function Header({ children }) {
	return (
		<div className='bg-stone-50 p-2'>
			<h1 className='font-bold text-4xl text-entntblue'>{children}</h1>
		</div>
	);
}
