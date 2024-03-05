import App from "./App";
import { shallow } from 'enzyme';
import { testStore } from './utils';
import React from "react";
import { Provider } from "react-redux";


const setup = (initialState = {}) => {
    const store = testStore(initialState);

    const wrapper = shallow(
            <App store={store} />
    ).childAt(0).dive();
    return wrapper
}

describe('<App />', () => {

    let wrapper;

    beforeEach(() => {
        const initialState = {
            posts: [
                {
                    title: "Test Title 1",
                    body: "Test Data",
                },
                {
                    title: "Test Title 1",
                    body: "Test Data",
                },
                {
                    title: "Test Title 1",
                    body: "Test Data",
                },
            ]
        }

        wrapper = setup(initialState)
    })

    it('should render without errors', () => {
        const component = wrapper.find('.app')
        expect(component.exists()).toBe(true)
    })
})