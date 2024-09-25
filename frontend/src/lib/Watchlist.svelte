<script>
  import { getIndexYahoo, round } from "../utils";

  let watchlist = [
    { symbol: "AAPL", name: "Apple Inc.", price: 150, change: "-0.5%" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 2800, change: "+1.2%" },
    { symbol: "BTC", name: "Bitcoin", price: 2800, change: "+1.2%" },
  ];
  async function fillInData() {
    for await (const index of watchlist) {
      index.data = await getIndexYahoo(index.symbol);
    }
  }
  //   watchlist.forEach(index => {
  //     index.data = await
  //   })
</script>

<section class="watchlist">
  <h2>Your Watchlist</h2>
  <table>
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Name</th>
        <th>Open</th>
        <th>Change</th>
        <th>Close</th>
        <th>High</th>
        <th>Low</th>
      </tr>
    </thead>
    <tbody>
      {#await fillInData()}
        <tr><td colspan="7"><div>...loading</div></td></tr>
      {:then response}
        {#each watchlist as stock}
          <tr>
            <td>{stock.symbol}</td>
            <td>{stock.name}</td>
            <td>{round(stock.data.open, 4)}</td>
            <td
              class={stock.data.close > stock.data.open
                ? "positive"
                : "negative"}
            >
              {round(+stock.data.close - +stock.data.open, 4)}
            </td>
            <td>{round(stock.data.close, 4)}</td>
            <td>{round(stock.data.high, 4)}</td>
            <td>{round(stock.data.low, 4)}</td>
          </tr>
        {/each}
      {/await}
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

  .positive::before {
    content: "+";
  }

  .negative {
    color: red;
  }

  table div {
    color: rgb(91, 219, 166);
    text-align: center;
    width: 100%;
  }
</style>
