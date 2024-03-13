import { FaSort } from 'react-icons/fa';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

export function ProductsTD({ children }) {
	return <td className='p-2 text-center'>{children}</td>;
}

export function ProductsTH({ handleSort, children }) {
	let sort;

	if (children && children !== '#') {
		sort = true;
	}

	return (
		<th className=' w-screen text-xl sticky top-0 z-auto bg-stone-200 h-16'>
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

export function IconButton({ type, ...props }) {
	let css, color, icon;

	if (type === 'edit') {
		icon = <MdEdit />;
		color = ' text-entntblue';
	} else if (type === 'delete') {
		icon = <MdDeleteForever />;
		color = ' text-red-500';
	}
	css = 'text-xl hover:text-2xl hover:text-bold hover:text' + color;

	return (
		<button
			className={css}
			{...props}
		>
			{icon}
		</button>
	);
}
