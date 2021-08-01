import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas GifExpertApp', () => {
    
    test('debe de mostar <GifExpertApp /> correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />)
        
        expect(wrapper).toMatchSnapshot()
        
    });
    
    test('debe de mostrar una lista de categories', () => {
        
        const categories = ["Dragon Ball", "One Punch"]
        
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find("GifGrid").length).toBe(categories.length)

    });

});