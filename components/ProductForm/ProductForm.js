import axios from 'axios';


export  function ProductForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Trying to send a product...");
    const response = await axios.post('/api/products',{
      name: 'post generated name',
      description: "post generated description",
      price: 1000
    });
    console.log(response);
  };
// https://www.youtube.com/watch?v=7vBSeFjJCww

  return (
    <div className="bg-gray-100">
      {/* <form method="POST" action="/api/products"> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" />

        <label htmlFor="price">Price: </label>
        <input type="text" name="price" />

        <label htmlFor="description">Description: </label>
        <textarea name="description" id="description" rows="2"></textarea>

        <button> Save Product </button>
      </form>
    </div>
  );
}