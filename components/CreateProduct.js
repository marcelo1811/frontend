import useForm from '../lib/useForm'
import Form from './styles/form'

export default function CreateProduct() {
    const { inputs, handleChange, clearForm, resetForm } = useForm({
        name: 'nice shoes',
        price: '24234',
        description: 'these are nice shoes',
        image: '',
    })
    return (
        <Form onSubmit={(e) => {
            e.preventDefault()
            console.log(inputs)
        }}>
            <fieldset>
                <label htmlFor='image'>
                    Image
                    <input
                        type='file'
                        id='image'
                        name='image'
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='name'>
                    Name
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placholder='Name'
                        value={inputs.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='price'>
                    Price
                    <input
                        type='number'
                        id='price'
                        name='price'
                        placholder='price'
                        value={inputs.price}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='description'>
                    Description
                    <textarea
                        type='text'
                        id='description'
                        name='description'
                        placholder='Description'
                        value={inputs.description}
                        onChange={handleChange}
                    />
                </label>
                <button type='submit'>+ Add Product</button>
            </fieldset>
        </Form>
    )
}