### Use cases
Typical use case of teleport is moving component from standart flow to children of context wrapper.
For example see Placer component sources.

### Usage:
```js
import Teleport, { TeleportContext } from '@roistat/ui/lib/Teleport';
```

Move one target

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

Move two targets

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

Update teleport children

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

Remove and add again teleport children'

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

