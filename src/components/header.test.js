import React from 'react';
import { shallow, mount} from 'enzyme';

import Header from './header';


describe('<Header/>', () => {
    it('Expect Header component to render', () => {
        shallow(<Header/>);
    });
});

