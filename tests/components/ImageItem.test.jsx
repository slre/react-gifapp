import { act } from "react";
import { ImageItem } from "../../src/components/ImageItem";
import { render, screen } from '@testing-library/react';



describe('Testing <ImageItem/>', () => { 
    const title="Naruto";
    const url = "http://api.com/";
    test('debe hacer match', () => { 
       
        const { container } = render( <ImageItem title={title} url={url} /> );
        expect(container).toMatchSnapshot();
        //render(<ImageItem title='Some title' url='SomeURL'/>)

    }); 

    test('Should print img url and alt ', () => { 
        render(<ImageItem title={title} url={url}/>);
        //screen.debug();
    
        //expect(screen.getByRole('img').src).toBe(url);

        const { src,alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);

     })

     test('should show title in component', () => { 
       // act(()=>{
            render(<ImageItem title={title} url={url}/>);
       // })
        
        expect( screen.getByText(title)).toBeTruthy();
        
      })
});