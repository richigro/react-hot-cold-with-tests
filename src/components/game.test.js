import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    //smoke test
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
});