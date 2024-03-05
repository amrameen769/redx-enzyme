import Header from "./components/header";
import "./app.scss";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import { Component } from "react";

const tempArr = [
  {
    fName: "Doe",
    lName: "John",
    age: 24,
    onlineStatus: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const buttonProps = {
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    };

    const { posts } = this.props;

    return (
      <div className="app">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click below to get posts."
            userArr={tempArr}
          />
          <SharedButton {...buttonProps} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(App);
