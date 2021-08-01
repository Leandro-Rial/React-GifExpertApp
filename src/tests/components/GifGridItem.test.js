import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas GifGridItem', () => {

    const title = "Titulo";
    const url = "http://localhost/test.png"

    let wrapper = shallow(<GifGridItem title={title} url={url} />)

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url} />)
    })

    test('debe de mostrar <GifGridItem /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()

    });

    test('debe de tener un parrafo con el title', () => {
        
        const titleGif = wrapper.find("h2").text().trim()

        expect(titleGif).toBe(title)

    });

    test('debe de tener la imagen igual al url y al alt de los props', () => {
        
        const imgGif = wrapper.find("img");

        expect(imgGif.prop("src")).toBe(url);
        expect(imgGif.prop("alt")).toBe(title);

    });

    test('debe de tener animate__fadeInLeft', () => {
        
        const div = wrapper.find("div");

        expect(div.hasClass("animate__fadeInLeft")).toBe(true);

    });
});