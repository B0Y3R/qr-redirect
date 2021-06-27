import  { useEffect, useState } from 'react';

export default function Product(props) {

    const [ product, setProduct ] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const data = await fetch('https://fir-hosting-app-clip.web.app/.well-known/api/1.json');

                console.log('DAta', await data.json() );
                setProduct(data);
            } catch (error) {
                console.error(error)
            }
           
        }
        getData();
    },[])


    if (!product) {
        return <div>Loading</div>
    }
    return <div>Product</div>;
}