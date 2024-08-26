
export const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews?.map((review) => (
        <li key={review.id}>{review.user} {review.text} </li>
      ))}
    </div>
  );
};