<script>
  let newsArticles = [
    {
      title: "Stock Market Rises",
      link: "#",
      summary: "Stocks are up today as...",
    },
    {
      title: "Tech Stocks Surge",
      link: "#",
      summary: "Tech companies see a rise in...",
    },
  ];
</script>

<section class="news">
  <h2>Latest News</h2>
  <ul>
    {#each newsArticles as article}
      <li>
        <a href={article.link} target="_blank">
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  .news {
    padding: 2rem;
    /* background-color: #f4f4f4; */
  }

  .news ul {
    list-style: none;
    /* list-style: armenian; */
    padding: 0;
  }

  .news li {
    margin-bottom: 1.5rem;
  }

  .news a {
    text-decoration: none;
    /* color: #333; */
  }

  .news h3 {
    margin: 0;
  }

  /* .news p {
    color: #555;
  }

  .news h2 {
    color: #111;
  } */
</style>
