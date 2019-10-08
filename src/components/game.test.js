import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';
import Header from './header';
import StatusSection from './status-section';
import InfoSection from './info-section';
import GuessSection from './guess-section';

describe('<Game />', () => {
    //smoke test
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
    it('contains Header GuessSection StatusSection InfoSection components ', () => {
        const wrapper = shallow(<Game/>);
        expect(wrapper.containsAllMatchingElements([<Header/>, <StatusSection/>, <InfoSection/>, <GuessSection/>])).toEqual(true);
    });
    it('updates state properly', () => {
        const wrapper = shallow(<Game/>);
        wrapper.setState({
            guesses: [0, 98, 30],
            auralStatus: 'Hello World!',
            correctAnswer: 99,
            feedback: 'abc'
        });
        expect(wrapper.state('guesses').length).toEqual(3);
        expect(wrapper.state('auralStatus')).toEqual('Hello World!');
        expect(wrapper.state('feedback')).toEqual('abc');
    });
    it('game restarts properly', () => {
        const wrapper = shallow(<Game/>);
        wrapper.setState({
            guesses: [0, 98, 30],
            auralStatus: 'Hello World!',
            correctAnswer: 99,
            feedback: 'abc'
        });
        wrapper.instance().restartGame();
        expect(wrapper.state('guesses').length).toEqual(0);
        expect(wrapper.state('auralStatus')).toEqual('');
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        // expect(wrapper.state('correctAnswer')).toExist();

    });
    // it('generates aural updates', () => {

    // });
    // it('make guesses', () => {

    // });
});