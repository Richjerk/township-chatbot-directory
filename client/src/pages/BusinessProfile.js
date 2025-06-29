useEffect(() => {
  axios.get(`/api/business/${id}`).then(res => setBusiness(res.data));
}, []);

return (
  <div>
    <h2>{business.name}</h2>
    <p>{business.description}</p>
    <h3>Reviews</h3>
    {business.reviews.map(r => (
      <div key={r._id}>
        <strong>Rating:</strong> {r.rating} ⭐
        <p>{r.comment}</p>
      </div>
    ))}
  </div>
);
