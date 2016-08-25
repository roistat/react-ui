StateProvider usage

	<StateProvider state={{ content: 'awesome content' }}>
		{(state, setState) => (
			<div>
				<button onClick={() => setState({ content: 'new content' })}>
					update
				</button> 
				{"\u00a0"}
				<span>
					{state.content}
				</span>
			</div>
		)}
	</StateProvider>
