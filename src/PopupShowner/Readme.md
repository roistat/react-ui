Show popup on button click and closing it by clicking outside of the popup

	<TeleportContext>
		<div style={{ margin: '40px' }}>
			<PopupShowner
				isAutoClosable
				presets={[
					{ xAxis: 'inside-left', yAxis: 'outside-bottom', offsetY: 5 }
				]}>
				<Button>
					Click me
				</Button>
				<Popup>
					Popup content
				</Popup>
			</PopupShowner>
		</div>
	</TeleportContext>
