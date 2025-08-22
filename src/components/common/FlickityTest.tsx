
import type { House } from "../../Types";
import Flickity from 'react-flickity-component'


const flickityOptions = {
    initialIndex: 0
}


export default function FlickityTest({ house }: { house: House }) {


    console.log(house.images);


    return (
        <>
          
            <Flickity
                className={'carousel w-3/5 mx-auto'}
                elementType={'div'}
                options={flickityOptions}
                disableImagesLoaded
                reloadOnUpdate
                static
            >
                {house?.images?.map((image, index) => (
                    <img key={index} src={image.url} alt={`House image ${index + 1}`} />
                ))}

            </Flickity>
        </>
    )
}