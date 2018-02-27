import Login from '../app_client/App/components/Body/components/Login';
import LoginJSX from '../app_client/App/components/Body/components/Login';

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

// describe what we are testing
describe('Login Component', () => {

    // make our assertion and what we expect to happen
    it('should render without throwing an error', () => {
        const component = render(<Login  />);
        const navigation = component.find('input');
        expect(navigation.length).toBe(2);
    }),
    it('should input "test" as the username and password'), () =>{
        const component = render(<Login  />);
        const username = component.find('input').get(0);
        const password = component.find('input').get(1);
        username.value = 'test';
        password.value = 'test';
        expect(username.text()).toEqual('test');
        expect(password.text()).toEqual('test');

    },
    it('should login'), () =>{
        const component = render(<Login  />);
        const username = component.find('input').get(0);
        const password = component.find('input').get(1);
        username.value = 'test';
        password.value = 'test';
        const form = component.find('form');
        form.simulate('submit');

    }
});