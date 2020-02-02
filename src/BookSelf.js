import React  from 'react'

class BookSelf extends React.Component {
  render() {
    const { shelfKey } = this.props;
    console.log("my shelf => " + shelfKey)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfKey}</h2>
        
      </div>
    )
  }
}

export default BookSelf