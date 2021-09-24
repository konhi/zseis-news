const options = {
  paths: {
    news: 'data/news.json',
    sentNews: 'data/sentNews.json'
  },
  newsPerPage: 4,
  selectors: {
    title: '.news_title',
    content: '.news_content_text',
    image: '.news_image img',
    dateModified: '.news_modtext'
  },
  defaultURL: 'https://zseis.zgora.pl/',
  defaultImage: 'https://zseis.zgora.pl/gfx/logo_zseis.gif'
}

export default options
