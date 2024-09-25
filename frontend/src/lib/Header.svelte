<script>
  export let user = {};
</script>

<nav class="navbar">
  <div class="logo">Finance Dashboard</div>
  <div class="search-bar">
    <input type="text" placeholder="Search stocks..." />
  </div>
  <div class="user-menu">
    {#if user}
      <span>Welcome, {user.name ?? "Stranger"}</span>
      <button>Logout</button>
    {:else}
      <button>Login</button>
      <button>Signup</button>
    {/if}
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-left: 250px;
    background-color: #333;
    color: #fff;
  }

  .logo {
    font-size: 1.5rem;
  }

  .search-bar input {
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
  }

  .user-menu button {
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    background-color: #555;
    border: none;
    color: #fff;
    cursor: pointer;
  }
</style>
