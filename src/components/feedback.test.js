import React from 'react';
import { shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<FeedBack/>', () => {
    it('Should render FeedBack component', () => {
        shallow(<Feedback/>);
    });
});