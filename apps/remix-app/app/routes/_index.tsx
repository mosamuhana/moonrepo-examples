/* eslint-disable camelcase */

import type { V2_MetaFunction as MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => [
	{ title: 'New Remix App' },
	{ content: 'Welcome to Remix!', name: 'description' },
];

export default function Index() {
	return (
		<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
			<h1>Welcome to Remix</h1>
			<ul>
				<li>
					<a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
						15m Quickstart Blog Tutorial
					</a>
				</li>
				<li>
					<a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
						Deep Dive Jokes App Tutorial
					</a>
				</li>
				<li>
					<a target="_blank" href="https://remix.run/docs" rel="noreferrer">
						Remix Docs
					</a>
				</li>
			</ul>
		</div>
	);
}
