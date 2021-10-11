export const categories = [
  {
    img: "https://img.icons8.com/fluent/96/000000/news.png",
    name: "general",
  },
  {
    img: "https://img.icons8.com/fluent/96/000000/hard-working.png",
    name: "business",
  },
  {
    img: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
    name: "entertainment",
  },
  {
    img: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
    name: "health",
  },
  {
    img: "https://img.icons8.com/fluent/96/000000/microscope.png",
    name: "science",
  },
  {
    img: "https://img.icons8.com/fluent/96/000000/trophy.png",
    name: "sports",
  },
  {
    img: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
    name: "technology",
  },
];

export const country = [
  {
    code: "us",
    name: "USA",
  },
  {
    code: "au",
    name: "Australia",
  },
  {
    code: "ru",
    name: "Russia",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "gb",
    name: "United Kingdom",
  },
  {
    code: "in",
    name: "India",
  },
];

export const sources = [
  {
    id: "bbc-news",
    name: "BBC News",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
  },
  {
    id: "cnn",
    name: "CNN",
    img: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
  },
  {
    id: "fox-news",
    name: "Fox News",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
  },
  {
    id: "google-news",
    name: "Google News",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
  },
];

export const BASE_URL = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category, country = "us") => {
  return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
  return `${BASE_URL}/everything/${source}.json`;
};
