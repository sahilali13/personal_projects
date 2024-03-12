import { FaSort } from 'react-icons/fa';

export function ProductsTD({ children }) {
	return <td className='p-2 text-center'>{children}</td>;
}

export function ProductsTH({ handleSort, children }) {
	let sort;

	if (children && children !== '#') {
		sort = true;
	}

	return (
		<th className=' w-screen text-xl sticky top-0 z-auto bg-stone-200'>
			<div className='flex justify-center'>
				{children}
				{sort && (
					<button
						className='p-2'
						onClick={() => handleSort(children)}
					>
						<FaSort className='text-base' />
					</button>
				)}
			</div>
		</th>
	);
}
