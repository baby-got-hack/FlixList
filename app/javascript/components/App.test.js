import React from 'react'
import App from './App'
import Enzyme, { shallow, } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe("when the app loads...",()=>{
    it("displays a header", ()=>{
        const renderedApp = shallow(<App />)
        const renderedHeader = renderedApp.find("Header")
        expect(renderedHeader.length).toEqual(1)   
    })
})