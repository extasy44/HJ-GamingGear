import React from "react";
import Select from "react-select";

import "./category-sort.styles.scss";

const options = [
  { value: "name-asc", name: "name", label: "Name A-Z", asc: "asc" },
  { value: "name-desc", name: "name", label: "Name Z-A", asc: "desc" },
  { value: "price-asc", name: "price", label: "Price L-H", asc: "asc" },
  { value: "price-desc", name: "price", label: "Price H-L", asc: "desc" },
  { value: "partnumber", name: "partnumber", label: "PartNo", asc: "asc" },
];

class CategorySort extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    const { updateSortOption } = this.props;
    this.setState({ selectedOption });
    updateSortOption(selectedOption.name, selectedOption.asc);
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
