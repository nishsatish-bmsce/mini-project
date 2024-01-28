export const itemDeleter = async (token, ticker) => {
  const res = await fetch('http://localhost:3000/wishlist', {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ticker })
  });

  const response = await res.json();
  console.log(response);
  return response.message;
}