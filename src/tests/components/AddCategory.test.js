import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Prueba AddCategory', () => {

    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    });

    test('debe de mostar <AddCategory /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()

    });

    test('debe de cambiar la caja de textto', () => {
        
        const inputAddCategory = wrapper.find("input");

        const value = "Helouda";

        inputAddCategory.simulate("change", { target: { value } })
        
        expect(wrapper.find("p").text().trim()).toBe( value )

    });

    test('no debe de postear la informacion con submit', () => {
        
        wrapper.find("form").simulate("submit", { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled()

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        // simular el Change
        const value = "Helouda";

        wrapper.find("input").simulate("change", { target: { value } })

        
        // simular el Submit
        wrapper.find("form").simulate("submit", { preventDefault(){} })
        
        
        // SetCategories debe ser llamado
        expect( setCategories ).toHaveBeenCalled()
        

        // InputValue clean
        const inputValue = wrapper.find("input").prop("value")
        
        expect( inputValue ).toBe("")
        
    });
});