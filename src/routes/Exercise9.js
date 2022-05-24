import { useEffect, useState } from "react";

function Exercise9() {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    const baseURL = "https://random-data-api.com/api/users/random_user?size=10";
    fetch(`${baseURL}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const renderList = posts.map((item) => (
    <li key={item.uid}>
      {" "}
      {item.password} {item.first_name} {item.last_name} {item.username}{" "}
      {item.gender} {item.phone_number} {item.social_insurance_number}{" "}
      {item.date_of_birth}
    </li>
  ));

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
      <div>
        <p>
          Fetch the data from this URL:
          <a href="https://random-data-api.com/api/users/random_user?size=10">
            https://random-data-api.com/api/users/random_user?size=10
          </a>
          . This will return a list of 10 random users.
          <br />
          Store it in React state and render a list with the information
          retrieved.
        </p>
        <div className="solution-container">
          <ul>{renderList}</ul>
        </div>
      </div>
    </div>
  );
}
export default Exercise9;
