<script>
  let watchlist = [
    { symbol: "AAPL", name: "Apple Inc.", price: 150, change: "-0.5%" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 2800, change: "+1.2%" },
  ];
</script>

<section class="watchlist">
  <h2>Your Watchlist</h2>
  <table>
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Name</th>
        <th>Price</th>
        <th>Change</th>
      </tr>
    </thead>
    <tbody>
      {#each watchlist as stock}
        <tr>
          <td>{stock.symbol}</td>
          <td>{stock.name}</td>
          <td>{stock.price}</td>
          <td class={stock.change.startsWith("+") ? "positive" : "negative"}
            >{stock.change}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</section>

<style>
  .watchlist {
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 5px;
    color: #242424;
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  .positive {
    color: green;
  }

  .negative {
    color: red;
  }
</style>
