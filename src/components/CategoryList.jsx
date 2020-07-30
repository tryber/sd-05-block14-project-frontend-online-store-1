import React from 'react';

class CategoryList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <section className="categories-container">
        { this.props.categories && categories.map((category) => (
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
