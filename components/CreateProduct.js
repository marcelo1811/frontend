import useForm from '../lib/useForm'

export default function CreateProduct() {
    const { inputs, handleChange, clearForm, resetForm } = useForm({
        name: 'nice shoes',
        price: '24234',
        description: 'these are nice shoes'
    })

    return (
        <form>
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
            <button type='button' onClick={clearForm}>Clear form</button>
            <button type='button' onClick={resetForm}>Reset form</button>
        </form>
    )
}