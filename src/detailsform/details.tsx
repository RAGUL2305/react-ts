import React, {
  useState,
  useRef,
  ChangeEvent,
  useEffect,
  RefObject,
} from "react";
import "./details.css";
import _ from "lodash";

interface Data {
  data: string[];
}

interface Form {
  id ?: number,
  name: string;
  gender: string;
  phone: string;
  email: string;
  active: string;
  review: string;
  sports ?:string[]
}
const initialData: Form = {
  name: "",
  gender: "",
  phone: "",
  email: "",
  active: "",
  review: "",
};

function Details(props: Data) {
  let { data } = props;

  const [selected, setSelected] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const [formData, setFormData] = useState<Form>(initialData);
  const [values, setValues] = useState<Form[] >([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [details, setDetails] = useState<boolean>(false);
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  const handleClick = () => {
    setSelected(!selected);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
    if (!values.includes(formData))
      setValues([
        ...values,
        { id: count, ...formData, sports: [...selectedItems] },
      ]);

    setFormData({
      name: "",
      gender: "",
      phone: "",
      email: "",
      active: "",
      review: "",
    });
    setSelected(false);
    setSelectedItems([]);
  };

  useEffect(() => {
    if (values !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [values]);

  const handleCheckboxChange = (item: string) => {
    setSelectedItems((arg) => {
      if (!arg.includes(item)) {
        return [...arg, item];
      } else {
        return arg.filter((option) => option !== item);
      }
    });
  };

  const handleDeleteClick = (item: {}) => {
    setValues((arg) => arg.filter((option) => option !== item));
  };

  const handleDetailsClick = () => {
    setDetails(!details);
  };

  const handleEditChange = (i: number, e: string) => {
    setValues((prevValues) =>
      prevValues.map((item, index) =>
        index === i ? { ...item, review: e } : item
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Name</td>
            <td>
              <input
                ref={inputRef}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                required
              />
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                required
              />
              Female
              <input
                type="radio"
                name="gender"
                value="Others"
                checked={formData.gender === "Others"}
                onChange={handleChange}
                required
              />
              Others
            </td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your number"
                maxLength={10}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Active</td>
            <td>
              <input
                type="radio"
                name="active"
                value="true"
                checked={formData.active === "true"}
                onChange={handleChange}
                required
              />
              true
              <input
                type="radio"
                name="active"
                value="false"
                checked={formData.active === "false"}
                onChange={handleChange}
                required
              />
              false
            </td>
          </tr>
          <tr>
            <td>Review</td>
            <td>
              <input
                type="text"
                name="review"
                value={formData.review}
                onChange={handleChange}
                placeholder="Enter your review"
                required
              />
            </td>
          </tr>
          <td>Sports</td>

          <div>
            <input
              value={selectedItems}
              onChange={handleChange}
              placeholder="Select your option"
              onClick={handleClick}
            />
            {selected &&
              data.map((item, index) => (
                <div>
                  <input
                    type="checkbox"
                    key={index}
                    onChange={() => handleCheckboxChange(item)}
                    checked={selectedItems.includes(item)}
                  />
                  {item}
                </div>
              ))}
          </div>
          <tr>
            <td>
              <button className="sum" type="submit">
                Submit
              </button>
            </td>
          </tr>
        </table>
      </form>
      <table className="details-table">
        <thead>
          <tr className="details-table-rows">
            <th>Id</th> <th>Name</th> <th>Gender</th> <th>PhoneNumber</th>
            <th>Email</th> <th>Active</th> <th>Review</th> <th>Sports</th>
            <th>Delete</th>
          </tr>
        </thead>

        {values.map((item, index) => (
          <tr key={index} className="details-table-rows">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.active}</td>

            <td>
              <input
                type="text"
                name="review"
                value={item.review}
                onChange={(e) => handleEditChange(index, e.target.value)}
                className="none"
              />
            </td>
            <td>{item.sports}</td>
            <td>
              <button
                className="delete"
                onClick={() => handleDeleteClick(item)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
      <div>
        <button className="det" onClick={handleDetailsClick}>
          View all details
        </button>
      </div>
      <div className="accordion">
        {details &&
          values.map((item, index) => (
            <div key={index} className="accordion-answer">
              {Object.entries(item).map(([key, value], j) => (
                <div className="view-details-list">
                  <span>{key}:</span>
                  <span className="view-details-list-value">{value}</span>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Details;
