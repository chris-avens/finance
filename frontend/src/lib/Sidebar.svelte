<div class="sidebar">
  <nav>
    <ul>
      <li><a href="/">Dashboard</a></li>
      <li><a href="/profile">Profile</a></li>
      <li><a href="/watchlist">Watchlist</a></li>
      <li><a href="/news">News</a></li>
    </ul>
  </nav>
</div>

<style>
  .sidebar {
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f4f4f4;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }

  .sidebar nav {
    padding: 1rem;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
  }

  .sidebar li {
    margin: 1rem 0;
  }

  .sidebar a {
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
  }

  .sidebar a:hover {
    text-decoration: underline;
  }
</style>
