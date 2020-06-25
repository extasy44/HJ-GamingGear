import React from "react";
import Select from "react-select";

import "./category-sort.styles.scss";

const options = [
  { value: "name", label: "Name" },
  { value: "price", label: "Price" },
  { value: "partnumber", label: "PartNo" },
];

class CategorySort extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    const { updateSortOption } = this.props;
    this.setState({ selectedOption });
    updateSortOption(selectedOption.value);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        className="category-sort-select"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Sort by"
      />
    );
  }
}

export default CategorySort;
