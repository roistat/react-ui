import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import FontIcon from './FontIcon.jsx';

	storiesOf('FontIcon', module)
    .addWithInfo('FontIconCheckbox', 'FontIcon Checkbox', () => (
        <FontIcon name="check" className="checkbox"/>
    ))	
	.addWithInfo('FontIconRefresh', 'FontIcon Refresh', () => (
        <FontIcon name="refresh"/>
    ))
