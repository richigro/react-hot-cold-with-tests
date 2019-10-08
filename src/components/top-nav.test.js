import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav/>', () => {
    it('should contain three li elements', () => {
        const wrapper = shallow(<TopNav/>);
        // console.log(wrapper.debug());
        // test to see if 3 li's are rendered
        expect(wrapper.find('li').children().length).toEqual(3);
      });
});
