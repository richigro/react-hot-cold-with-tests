import React from 'react';
import {shallow, mount} from 'enzyme';

import AurialStatus from './aural-status';

describe('<AurialStatus/>', () => {
    it('Renders component', () => {
        shallow(<AurialStatus/>);
    });
});