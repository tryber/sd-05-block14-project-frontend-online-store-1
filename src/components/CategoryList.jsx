import React from 'react';

import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { categories: [] };
  }

  componentDidMount() {
    api.getCategories().then((category) => {
      this.setState({ categories: category });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <section className="categories-container">
        {categories.map((category) => (
          <form key={category.id}>
            <input
              type="checkbox"
              name={category.id}
              data-testid="category"
              onChange={(event) => this.props.handleChange(event.target.name)}
            />
            <label htmlFor="categories-list">{category.name}</label>
          </form>
        ))}
      </section>
    );
  }
}

export default CategoryList;
