'use strict';

import React, { PropTypes } from 'react';

export default class FontIcon extends React.Component {
	static propTypes = {
		/**
		 * Name of font awesome icon without 'fa-' prefix
		 */
		name: PropTypes.string
	};
	render() {
		const props = this.props;
		const className = (props.className ? ` ${props.className}` : '');

		return (
			<i
				{...props}
				className={`fa fa-${props.name}${className}`}
			/>
		)
	}
};
