<script>
  import Header from "./lib/Header.svelte";
  import Sidebar from "./lib/Sidebar.svelte";
  import MarketOverview from "./lib/MarketOverview.svelte";
  import Watchlist from "./lib/Watchlist.svelte";
  import News from "./lib/News.svelte";

  let user = { name: "John Doe" };
</script>

<Header {user} />
<Sidebar />
<main>
  <MarketOverview />
  <Watchlist />
  <News />
</main>

<style>
  main {
    margin-left: 250px;
    padding: 1rem;
    /* background-color: #eef1f5; */
    background-color: #242424;
    min-height: 100vh;
  }
</style>
