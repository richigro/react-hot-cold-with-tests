import React from 'react';
import { shallow, mount} from 'enzyme';

import Header from './header';
import TopNav from './top-nav';


describe('<Header/>', () => {
    it('Expect Header component to render TopNav component', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find(TopNav).length).toEqual(1);
    });
});

