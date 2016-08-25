This component you should use for transition animation

	<StateProvider>
		{(state, setState) => (
			<div style={{ height: 500 }}>
				<Button onClick={() => setState({ isShown: !state.isShown })}>
					{state.isShown ? 'Hide' : 'Show'} 
			   </Button>
			   <Transition>
					{state.isShown && (({ isAppear, isEnter, isLeave, isUpdate }) => (
						<div 
							style={{ 
								marginTop: 30,
								transition: 'all 0.8s ease-out', 
								opacity: isEnter ? 1 : 0,
								transform: `translateY(${ isEnter? 0 : '60%'})`
							}}>
							Some awesome content...
						</div>
					))}
			   </Transition>
			</div>
		)}
	</StateProvider>
