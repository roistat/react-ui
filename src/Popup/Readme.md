Simple popup with content:

	<Popup>popup content</Popup>

Simple popup with content and tail:

	<Popup hasTail={true} tailDirection='left'>popup content</Popup>

Popup with child react component and tail and custom color:

	<Popup hasTail={true} tailDirection='left' tailColor='#1dc428'>
		<TextInput placeholder="Enter the text" />
	</Popup>

