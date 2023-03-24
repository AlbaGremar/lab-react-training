function Rating({ children }) {
  let rating = parseFloat(children)

  switch (true) {
    case rating < 0.5:
      rating = "☆☆☆☆☆";
      break;
    case rating < 1.5:
      rating = "★☆☆☆☆";
      break;
    case rating < 2.5:
      rating = "★★☆☆☆";
      break;
    case rating < 3.5:
      rating = "★★★☆☆";
      break;
    case rating < 4.5:
      rating = "★★★★☆";
      break;
    case rating <= 5:
      rating = "★★★★★";
      break;
    default:
      rating = "☆☆☆☆☆"
  }
  return (
    <div className="rating ms-4">
      <p className="fs-3">{rating}</p>
    </div>
  )
}

Rating.defaultProps = {
  children: 0,
}

export default Rating