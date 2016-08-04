Simple popup:

	<Popup />


Simple popup with tail

	<Popup hasTail = { true } tailSide = 'left' />


Autoclosable popup with tail

	<Popup autoCloseable = { true } hasTail = { true } tailSide = 'left' />


Popup with child react component and tail
	<Popup hasTail = { true } tailSide = 'left' >
		<TextInput placeholder="Enter the text" />
	</Popup>

