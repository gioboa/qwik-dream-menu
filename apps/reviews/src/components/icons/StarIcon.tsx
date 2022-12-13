import { component$ } from '@builder.io/qwik';
import { Review } from '../../types';

export default component$<{ rating: number; review: Review }>(
	({ review, rating }) => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				class={`${
					review.rating > rating ? 'text-yellow-400' : 'text-gray-200'
				} h-5 w-5 flex-shrink-0`}
				fill='currentColor'
				stroke='currentColor'
				stroke-width='2'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
				/>
			</svg>
		);
	}
);
