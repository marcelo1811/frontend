import { useQuery } from "@apollo/client"
import { parseWithOptions } from "date-fns/fp"
import { gql } from "graphql-tag"
import Head from 'next/head'
import styled from "styled-components"

const ProductStyles = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    min-height: 800px;
    max-width: var(--maxWidth);
    justify-content: center;
    align-items: top;
    gap: 2rem;
    img {
        width: 100%;
        object-fit: contain;
    }
`

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!) {
        Product(where : { id: $id }) {
            name
            price
            description
            photo {
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`

export default function SingleProduct({ id }) {
    const { data, error, loading } = useQuery(SINGLE_ITEM_QUERY, { variables: { id: id }})
    if (loading) return <p>Loading...</p>
    if (error) return <DisplayError error={error} />

    const { name, description, price, photo } = data.Product
    return (
        <div>
            <Head>
                <title>Sick Fits | {name}</title>
            </Head>
            <ProductStyles>
                <img 
                    src={photo.image.publicUrlTransformed}
                    alt={photo.image.altText}
                />
                <div className='details'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </ProductStyles>
        </div>
    )
}