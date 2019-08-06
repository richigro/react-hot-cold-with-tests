import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav/>', () => {
    it('should contain three li elements', () => {
        const wrapper = shallow(<TopNav/>);
        // console.log(wrapper.debug());
        expect(wrapper.contains('nav')).to.have.lengthOf(1);
      });
});
