import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBookList } from '../../redux/actions/book-list'

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      page: 1,
      size: 20
    }
  }
  static fetch(store) {
    return store.dispatch(fetchBookList({ page: 1, size: 20 }))
  }

  componentDidCatch(error, info) {
    // 在这里可以做异常上报
    console.log('发送错误' + error, info)
  }

  componentWillMount() {
    const { booklist } = this.props
    if (!booklist.length) {
      this.props.fetchBookList({ page: this.state.page, size: this.state.size })
    }
  }

  loadMore = page => {
    this.props.fetchBookList({ page: page, size: this.state.size })
    this.setState({ page: page })
  }

  renderBookList = booklist => {
    return (
      <div className="book-list">
        {booklist.map((item, index) => (
          <div className="book-list-item" key={'bookindex' + index}>
            <div>
              <Link className="book-title" to={`/book/${item.dbName}`}>
                {item.bookName}
              </Link>
            </div>
            <div className="book-detail">{item.bookDetail}</div>
          </div>
        ))}
      </div>
    )
  }

  render() {
    const { props } = this
    const { booklist } = props
    const { page } = this.state

    console.log('booklist ====> ', booklist)

    return (
      <div className="home">
        <div className="title">古文目录</div>
        {this.renderBookList(booklist)}
        <div className="btn-wrapper">
          <a className="btn" onClick={() => this.loadMore(page + 1)}>
            加载更多
          </a>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  booklist: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  booklist: state.booklist.list,
  pagination: state.booklist.pagination
})

const mapDispatchToProps = {
  fetchBookList: fetchBookList
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
