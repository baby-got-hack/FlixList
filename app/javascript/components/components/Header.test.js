import React from 'react'
import Header from './Header'
import Enzyme, { shallow, } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe(" when header renders", ()=>{
    it("displays a log in link", ()=>{
        const header = shallow(<Header />).find("a")
        expect(header.text()).toEqual("Login")
    })

    it("links to the log in route", ()=>{
        const loginLink = shallow(<Header sign_in_route="login" />).find("a")
        expect(loginLink.prop("href")).toEqual("login")
    })
})