import ImageGallery from 'react-image-gallery'

function Carousel({props}) {

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
            original:'https://i.imgur.com/qNWXWLa.png',
            thumbnail:'https://i.imgur.com/qNWXWLa.png'
        },{
            original:'https://i.imgur.com/E79dtNi.png',
            thumbnail:'https://i.imgur.com/E79dtNi.png'
        },{
            original:'https://i.imgur.com/vf9dUTB.png',
            thumbnail:'https://i.imgur.com/vf9dUTB.png'
        },{
            original:'https://i.imgur.com/72553Mn.png',
            thumbnail:'https://i.imgur.com/72553Mn.png'
        },{
            original:'https://i.imgur.com/DxoBA8L.png',
            thumbnail:'https://i.imgur.com/DxoBA8L.png'
        },{
            original:'https://i.imgur.com/1xubbyt.png',
            thumbnail:'https://i.imgur.com/1xubbyt.png'
        },{
            original:'https://i.imgur.com/ICyzzTx.png',
            thumbnail:'https://i.imgur.com/ICyzzTx.png'
        },
    ]

    const RDImg = [
        {
            original:'https://i.imgur.com/3AVf5xS.png',
            thumbnail:'https://i.imgur.com/3AVf5xS.png' 
        },{
            original:'https://i.imgur.com/lh6KGfD.png',
            thumbnail:'https://i.imgur.com/lh6KGfD.png' 
        },{
            original:'https://i.imgur.com/GdLdmYv.png',
            thumbnail:'https://i.imgur.com/GdLdmYv.png' 
        },{
            original:'https://i.imgur.com/Gjf2OST.png',
            thumbnail:'https://i.imgur.com/Gjf2OST.png' 
        },{
            original:'https://i.imgur.com/sRv1cWD.png',
            thumbnail:'https://i.imgur.com/sRv1cWD.png' 
        },{
            original:'https://i.imgur.com/7thqEou.png',
            thumbnail:'https://i.imgur.com/7thqEou.png' 
        },
    ]

    let images = []

    if (props === 'R'){
        images = RDImg
    } else if (props === 'Hues'){
        images = HImg
    } else if (props === 'Pour'){
        images = PImg
    }
    
    return (

        <ImageGallery items = {images}/>
    )
}

export default Carousel

// https://www.npmjs.com/package/react-image-gallery