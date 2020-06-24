import React from "react";
import ItemsCarousel from "react-items-carousel";
import range from "lodash/range";

export default class CarouselProducts extends React.Component {
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(20),
      });
    }, 100);
  }

  createChildren = (n) =>
    range(n).map((i) => (
      <div key={i} style={{ height: 200, background: "#333" }}>
        {i}
      </div>
    ));

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const isDataFetching = false;
    return (
      <div
        style={{
          padding: "0 60px",
          maxWidth: 1600,
          margin: "0 auto",
        }}
      >
        <ItemsCarousel
          placeholderItem={<div style={{ height: 200, background: "#EEE" }} />}
          enablePlaceholder={true}
          numberOfPlaceholderItems={10}
          numberOfCars={10}
          gutter={12}
          slidesToScroll={2}
          chevronWidth={60}
          outsideChevron={true}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={(value) =>
            this.setState({ activeItemIndex: value })
          }
          rightChevron={">"}
          leftChevron={"<"}
        >
          {isDataFetching
            ? []
            : Array.from(new Array(8)).map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: 350,
                    background: "url(https://placeimg.com/380/200/nature)",
                  }}
                />
              ))}
        </ItemsCarousel>
      </div>
    );
  }
}
