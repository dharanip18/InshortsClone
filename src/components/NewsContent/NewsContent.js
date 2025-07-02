import Container from "@mui/material/Container";

const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
  return (
    <Container className="articles-list">
      {newsArray &&
        newsArray.map((item, index) => (
          <div className="article-card" key={index}>
            <img
              src={
                item.urlToImage
                  ? item.urlToImage
                  : "https://www.shutterstock.com/image-vector/image-icon-trendy-flat-style-600nw-643080895.jpg"
              }
              alt="news"
            />
            <div>
              <h2>{item.title}</h2>
              <div>
                <span>short by </span>
                {item.author ? item.author : "Unknown author"}
              </div>
              <p>{item.description}</p>
              <div>
                <span>Read more at </span>
                <a href={item.url}>{item.source.name}</a>
              </div>
            </div>
          </div>
        ))}
      {loadMore <= newsResults && (
        <>
          <button
            className="loadMore"
            onClick={() => setLoadMore(loadMore + 10)}
          >
            Load More
          </button>
        </>
      )}
    </Container>
  );
};

export default NewsContent;
