import React, {Component} from 'react';
import { AutoComplete, Input, Icon } from 'antd';

class SearchBar extends Component {
  state = {
      dataSource: [],
  }

  render() {
      const { dataSource } = this.state;

      return (
          <AutoComplete
              className="search-bar"

              onSelect={this.onSelect}
              onSearch={this.handleSearch}
              placeholder="Search NBA Player"
              size="large"
              optionLabelProp="value"
          >

          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
          </AutoComplete>
      );
  }

}

export default SearchBar;
