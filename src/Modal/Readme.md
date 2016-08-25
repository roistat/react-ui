Modal Window with updating content on button click and close button

	<StateProvider>
		{(state, setState) => (
			<TeleportContext>
				<div>
					<Button onClick={() => setState({ isShown: !state.isShown })}>
						show modal
					</Button>
					<Modal isShown={state.isShown} onClose={() => setState({ isShown: false, content: null })}>
						<div style={{ padding: 20 }}>
							Modal
							<View style={{ height: 100, width: 200 }}>
								{state.content || 'some modal content'}
							</View>
							<View>
								<Button size='xs' onClick={() => setState({ content: 'update text' })}>
									Update
								</Button>
								{"\u00a0"}
								<Button size='xs' onClick={() => setState({ isShown: false, content: '' })}>
									Close
								</Button>
							</View>
						</div>
					</Modal>
				</div>
			</TeleportContext>
		)}
	</StateProvider>

Modal Window with header title and updating body

	<StateProvider>
		{(state, setState) => (
			<TeleportContext>
				<div>
					<Button onClick={() => setState({ isShown: !state.isShown })}>
						show modal
					</Button>
					<Modal isShown={state.isShown} onClose={() => setState({ isShown: false, content: null })}>
						<ModalHeader>
							<ModalHeaderTitle onClick={() => setState({ isShown: false, content: null })}>
								Back
							</ModalHeaderTitle>
						</ModalHeader>
						<ModalBody>
							<View style={{ height: 100, width: 200 }}>
								{state.content || 'some modal content'}
							</View>
							<View>
								<Button size='xs' onClick={() => setState({ content: 'update text' })}>
									Update
								</Button>
							</View>
						</ModalBody>
					</Modal>
				</div>
			</TeleportContext>
		)}
	</StateProvider>

Modal Window with Back Title, updating body and custom body theme

	<StateProvider>
		{(state, setState) => (
			<TeleportContext>
				<div>
					<Button onClick={() => setState({ isShown: !state.isShown })}>
						show modal
					</Button>
					<Modal isShown={state.isShown} onClose={() => setState({ isShown: false, content: null })}>
						<ModalHeader>
							<ModalHeaderBackTitle onClick={() => setState({ isShown: false, content: null })}>
								Back
							</ModalHeaderBackTitle>
						</ModalHeader>
						<ModalBody theme='gray'>
							<View style={{ height: 100, width: 200 }}>
								{state.content || 'some modal content'}
							</View>
							<View>
								<Button size='xs' onClick={() => setState({ content: 'update text' })}>
									Update
								</Button>
							</View>
						</ModalBody>
					</Modal>
				</div>
			</TeleportContext>
		)}
	</StateProvider>

Modal Window with Editable Title and custom body theme

	<StateProvider>
		{(state, setState) => (
			<TeleportContext>
				<div>
					<Button onClick={() => setState({ isShown: !state.isShown })}>
						show modal
					</Button>
					<Modal isShown={state.isShown} onClose={() => setState({ isShown: false, content: null })}>
						<ModalHeader>
							<ModalHeaderEditableTitle onClick={() => setState({ isShown: false, content: null })}>
								New Title ...
							</ModalHeaderEditableTitle>
						</ModalHeader>
						<ModalBody theme='gray'>
							<View style={{ height: 100, width: 200 }}>
								{state.content || 'some modal content'}
							</View>
						</ModalBody>
					</Modal>
				</div>
			</TeleportContext>
		)}
	</StateProvider>

Autoclosable Modal Window with Editable Title and placer

	<StateProvider>
		{(state, setState) => (
			<TeleportContext>
				<div>
					<Button onClick={() => setState({ isShown: !state.isShown })}>
						show modal
					</Button>
					<Modal isAutoClosable isShown={state.isShown} onClose={() => setState({ isShown: false, content: null })}>
						<ModalHeader>
							<ModalHeaderEditableTitle onClick={() => setState({ isShown: false, content: null })}>
								New Title ...
							</ModalHeaderEditableTitle>
						</ModalHeader>
						<ModalBody theme='gray'>
							<View style={{ height: 100, width: 200 }}>
								{state.content || 'some modal content'}
								<Placer xAxisPresets={['inside-left']} yAxisPresets={['inside-top']}>
									<div style={{ padding: 40, height: 400,width: 100, background: '#333', color: '#fff' }}>
										Click me
									</div>
								</Placer>
							</View>
						</ModalBody>
					</Modal>
				</div>
			</TeleportContext>
		)}
	</StateProvider>

