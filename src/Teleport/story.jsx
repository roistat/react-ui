import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import StateProvider from '../StateProvider';
import TeleportContext from './TeleportContext';
import Teleport from '../Teleport';

storiesOf('Teleport', module)
	.add('Move one target', () => (
		<TeleportContext>
			<div style={{ position: 'relative' }}>
				move to
				<div>
					some awesome block
				</div>
				<div>
					<Teleport>
						<div style={{ position:'absolute', top: 0, left: 0, marginLeft: 200, color: 'green' }}>
							Target 1
						</div>
					</Teleport>
					move from
				</div>
			</div>
		</TeleportContext>
	))
	.add('Move two target', () => (
		<TeleportContext>
			<div style={{ position: 'relative' }}>
				move to
				<div>
					some awesome block
				</div>
				<div>
					<Teleport>
						<div style={{ position:'absolute', top: 0, left: 0, marginLeft: 200, color: 'green' }}>
							Target 1
						</div>
					</Teleport>
					<Teleport>
						<div style={{ position:'absolute', top: 0, left: 0, marginLeft: 280, color: 'green' }}>
							Target 2
						</div>
					</Teleport>
					move from
				</div>
			</div>
		</TeleportContext>
	))
	.add('Update teleport children', () => (
		<StateProvider state={{ content1: 'Target 1', content2: 'Target 2' }}>
			{(state, setState) => (
				<TeleportContext>
					<div style={{ position: 'relative' }}>
						move to
						<div>
							<button onClick={() => setState({ content1: 'new content 1' })}>
								update target 1
							</button>
							{"\u00a0"}
							<button onClick={() => setState({ content2: 'new content 2' })}>
								update target 2
							</button>
						</div>
						<div>
							<Teleport>
								<div style={{ position:'absolute', top: 0, left: 0, marginLeft: 220, color: 'green' }}>
									{state.content1}
								</div>
							</Teleport>
							<Teleport>
								<div style={{ position:'absolute', top: 0, left: 0, marginLeft: 300, color: 'green' }}>
									{state.content2}
								</div>
							</Teleport>
							move from
						</div>
					</div>
				</TeleportContext>
			)}
		</StateProvider>
	))
	.add('Remove and add again teleport children', () => (
		<StateProvider state={{ isShown: true }}>
			{(state, setState) => (
				<TeleportContext>
					<div style={{ position: 'relative' }}>
						move to
						<div>
							<button onClick={() => setState({ isShown: !state.isShown })}>
								{state.isShown ? 'Remove' : 'Add'}
							</button>
						</div>
						<div>
							{ state.isShown &&
								<Teleport>
									<div style={{ position:'absolute', top: 0, left: 0, marginLeft: 200, color: 'green' }}>
										Target 1
									</div>
								</Teleport>
							}
							<Teleport>
								<div style={{ position:'absolute', top: 0, left: 0, marginLeft: 280, color: 'green' }}>
									Target 2
								</div>
							</Teleport>
							move from
						</div>
					</div>
				</TeleportContext>
			)}
		</StateProvider>
	));
