import React from 'react'
import Home from './Home'
import Enzyme, { shallow, } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe(" when home renders", ()=>{
    it("displays a tags", ()=>{
        const home = shallow(<Home />)
        const aTags = home.find("a")
        expect(aTags.length).toEqual(1)
    })

    it("displays faq", ()=>{
        const faq = shallow(<Home />)
        const homeTag = faq.find("h1")
        expect(homeTag.length).toEqual(2)
    })
})