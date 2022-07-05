import ImageGallery from 'react-image-gallery'

function Carousel() {

    const HImg =[
        {
            original:'https://i.imgur.com/BxTqdAc.png',
            thumbnail:'https://i.imgur.com/BxTqdAc.png'
        },{
            original:'https://i.imgur.com/FHkmcbY.png',
            thumbnail:'https://i.imgur.com/FHkmcbY.png'
        },{
            original:'https://i.imgur.com/PuCbnPl.png',
            thumbnail:'https://i.imgur.com/PuCbnPl.png'
        },{
            original:'https://i.imgur.com/C96B0O5.png',
            thumbnail:'https://i.imgur.com/C96B0O5.png'
        },{
            original:'https://i.imgur.com/QPKHSj8.png',
            thumbnail:'https://i.imgur.com/QPKHSj8.png'
        },{
            original:'https://i.imgur.com/gyJzLVY.png',
            thumbnail:'https://i.imgur.com/gyJzLVY.png'
        },,{
            original:'https://i.imgur.com/4scfCzm.png',
            thumbnail:'https://i.imgur.com/4scfCzm.png'
        },
    ]

    const PImg =[
        {
            original:'https://i.imgur.com/BxTqdAc.png',
            thumbnail:'https://i.imgur.com/BxTqdAc.png'
        },
    ]
    
    return (
        <ImageGallery items = {HImg}/>
    )
}

export default Carousel